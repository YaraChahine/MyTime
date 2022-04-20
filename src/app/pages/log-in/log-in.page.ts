import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyAPIsService,User } from './../../services/my-apis.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  isSubmitted = false;
  ionicForm: FormGroup;
  constructor(private router: Router,private service: MyAPIsService,public alertController: AlertController,public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Password: ['', [Validators.required]],
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  public signup(){
    this.router.navigate(['sign-up']);
}
async showAlert() {
  const alert = await this.alertController.create({
    header: 'Attention',
    message: 'Incorrect email or password. Please try again.',
    buttons: ['OK']
  });
   await alert.present();
} //form: NgForm
public onSubmit(){
  this.isSubmitted = true;
  if(!this.ionicForm.valid){
    console.log('Please provide all the required values!');
      return false;
  }else{
  const user = this.ionicForm.value;
  this.service.checkUser(user).subscribe(response => {
    if(response==null){
        this.showAlert();
      }
      else{
         localStorage.setItem("logged-in-email",this.ionicForm.value.Email);
        console.log(this.ionicForm.value.Email);
        this.router.navigate(['tabs']);
      }
  });
 }
}
}
