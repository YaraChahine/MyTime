import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyAPIsService,User } from './../../services/my-apis.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  isSubmitted = false;
  ionicForm: FormGroup;
  constructor(private router: Router,private service: MyAPIsService,public alertController: AlertController,public formBuilder: FormBuilder) { }

  ngOnInit() {


    //the following is the validate the input entered by the user when signing up
    this.ionicForm = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.pattern('.*\\S.*[a-zA-z]'),Validators.maxLength(30)]],
      LastName: ['', [Validators.required, Validators.pattern('.*\\S.*[a-zA-z]'),Validators.maxLength(30)]],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{3,}'),Validators.minLength(8)]],
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }


  //if the user already has ann account, they are redirected to the log in page
public login(){
  this.router.navigate(['log-in']);
}

//the following alert is shown when a user attempts to sign in with a previously registered email
async showAlert() {
  const alert = await this.alertController.create({
    header: 'Attention',
    message: 'Email already taken.',
    buttons: ['OK']
  });
   await alert.present();
}



public onSubmit(){
  this.isSubmitted = true;
  if(!this.ionicForm.valid){
    //if the input entered by the user does not meet the validation requirements,
    // the user is asked of provide all required values
    console.log('Please provide all the required values!');
      return false;
  }else{
    //else, we save the user's email in the local storage
    localStorage.setItem("logged-in-email",this.ionicForm.value.Email);
    const user = this.ionicForm.value;
    //then we call the AddUser api giving it the user form as parameter
    this.service.addUser(user).subscribe(response => {
      if(response==null){
        //we check in the backend if email already exists, in which case we call the showAlert() function
        this.showAlert();
      }
      else{
        //if the user registration is successfully executed, the user is redirected to the app
        this.router.navigate(['tabs']);
      }
  });
  }
}
}
