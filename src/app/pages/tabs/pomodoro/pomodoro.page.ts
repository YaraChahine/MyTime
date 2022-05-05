import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddGoalPage } from '../add-goal/add-goal.page';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.page.html',
  styleUrls: ['./pomodoro.page.scss'],
})
export class PomodoroPage implements OnInit {


  goals : any =[];
  milestones : any=[];
  constructor(private modalCtrl: ModalController,public service: MyAPIsService) { }


  //this page was supposed to be a pomodoro clock but I changed it since the timer could be used as a pomodoro clock
  //it is now responsible for displaying the user's goals and redirecting them to the modal wheere they can input a new goal
  ngOnInit() {
    this.getGoals();
    this.getMilestones();
  }




  //this function is called when th euser clicks on "add a goal" button
  //it opens a modal 
    async openModal(){
      const modal = await this.modalCtrl.create({
        component: AddGoalPage
    
      });
    
      await modal.present();
    }

   
    
    //this function calls the getGoals api to retrieve all the goals
    //previously entered by the logged in user
    //and saves them in the "goals" varibale upon success;
  getGoals(){
    this.service.getGoals(localStorage.getItem("logged-in-user-id")).subscribe((res:any)=>{
      this.goals=res;
      console.log("SUCCESS get goals");
    },(error:any)=>{
      console.log("Error get goals");
    })
  }

      
    //this function calls the getMilestones api to retrieve all the milestones corresponding to each goal
    //previously entered by the logged in user
    //and saves them in the "milestones" varibale upon success;
    
  getMilestones(){
    this.service.getMilestones(localStorage.getItem("logged-in-user-id")).subscribe((res:any)=>{
      this.milestones=res;
      console.log("SUCCESS get milestones");
    },(error:any)=>{
      console.log("Error get milestones");
    })
  }
  }
