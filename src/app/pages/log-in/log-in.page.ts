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
    //the following form builder ensures the validation of the user's input
    this.ionicForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Password: ['', [Validators.required]],
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }


  //if a user click son signup the following function routes the user to the sign up page
  public signup(){
    this.router.navigate(['sign-up']);
}


//this functions is called when the user attempts to log in with wrong credentia;s
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

    //when a user logs in, if the credentials entered do not correspond to any user in the db,
    //the function showAlert is called; 
  const user = this.ionicForm.value;
  this.service.checkUser(user).subscribe(response => {
    if(response==null){
        this.showAlert();
      }
      else{
        //else, we save the logge in user's email in the local storage (as a unique key that can be used in future apis)
        //and the user is routed to the application.
         localStorage.setItem("logged-in-email",this.ionicForm.value.Email);
        console.log(this.ionicForm.value.Email);
        this.router.navigate(['tabs']);
      }
  });
 }
}
}
