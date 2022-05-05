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

  ngOnInit() {
    this.getGoals();
  }



    async openModal(){
      const modal = await this.modalCtrl.create({
        component: AddGoalPage
    
      });
    
      await modal.present();
    }

    
  getGoals(){
    this.service.getGoals(localStorage.getItem("logged-in-user-id")).subscribe((res:any)=>{
      this.goals=res;
      console.log("SUCCESS get goals");
    },(error:any)=>{
      console.log("Error get goals");
    })
  }
  }
