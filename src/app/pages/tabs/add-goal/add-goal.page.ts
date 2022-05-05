import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  ionicForm: FormGroup;
  milestones_count:any=[];


  constructor(private modalCtrl: ModalController,public formBuilder: FormBuilder,public  toastController: ToastController,public service: MyAPIsService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      goal_title: [ ""],
      goal_deadline: [""],
      goal_milestones1:[""],
      goal_milestones2:[""],
      goal_milestones3:[""]
    });
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }



  selectedType($event){
    var i;
     for (i=0;i<$event.target.value;i++){
        this.milestones_count.push(i);
     }
 
    }

     onSubmit(){

  
      const goal=this.ionicForm.value;
      console.log(goal);
      goal["user_id"]=localStorage.getItem("logged-in-user-id");

      this.service.addGoal(goal).subscribe((res:any)=>{
        console.log("SUCCESS get task");
        console.log(res);
      },(error:any)=>{
        console.log("Error get task");
        console.log(error);
      })

     
    }
  
  
}
