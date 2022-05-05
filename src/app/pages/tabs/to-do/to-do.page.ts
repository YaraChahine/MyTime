import { Component, OnInit } from '@angular/core';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  constructor(public service: MyAPIsService) { }
//this page is a to do list in which a user can add, remove, or see previously added tasks

  user :any = [];
  task : string;
  tasks: any =[]
  ngOnInit() {

    this.getUserInfo();
    this.getTasks();

    }



    
  
    //the task added by th euser in the app is saved into the "task" variable above
    //which is fed to the the addTask api called by the function below;
    //if the api successfuly adds the task to the database, we call the function (getTasks()) again 
    //so that the to do lost is dynamically updated
  addTask(){
    this.service.addTask(localStorage.getItem("logged-in-user-id"),this.task).subscribe((res:any)=>{
      console.log("SUCCESS task");
      this.getTasks();
    },(error:any)=>{
      console.log("Error task");
    })
  }






  //this function calls the getTasks api which retrieves the tasks entered by the logged in user 
  //from the database and saved them into the "tasks" array  upon success
  getTasks(){
    this.service.getTasks(localStorage.getItem("logged-in-user-id")).subscribe((res:any)=>{
      this.tasks=res;
      console.log("SUCCESS get task");
    },(error:any)=>{
      console.log("Error get task");
    })
  }


  //this function is fed the task id from the front end and give it to the deleteTask api which removes
  //it from the database
  //upon success, we call the getTasks function again to re retrieve the tasks dynamiclaly wihtout the task just deleted
    deleteTask(id){
    this.service.deleteTask(id).subscribe((res:any)=>{
      
      console.log("SUCCESS delete task");
      this.getTasks();

    },(error:any)=>{
      console.log("Error delete task");
    })
  }


  //this api is responsible of retrieving the logged in user's id and saving it into lcoal storage
  getUserInfo(){
    this.service.getUserInfo(localStorage.getItem("logged-in-email")).subscribe((res:any)=>{

      this.user=res;
      localStorage.setItem("logged-in-user-id",this.user.user_id);

      console.log("SUCCESS");
    },(error:any)=>{
      console.log("Error");
    })
  }

    

}
