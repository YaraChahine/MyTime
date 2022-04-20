import { Component, OnInit } from '@angular/core';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  constructor(public service: MyAPIsService) { }


  user :any = [];
  task : string;
  tasks: any =[]
  ngOnInit() {

    this.getUserInfo();
    this.getTasks();
    this.getapi("https://zenquotes.io/api/quotes/");

    }



    
  
  addTask(){
    this.service.addTask(localStorage.getItem("logged-in-user-id"),this.task).subscribe((res:any)=>{
      console.log("SUCCESS task");
      this.getTasks();
    },(error:any)=>{
      console.log("Error task");
    })
  }






  getTasks(){
    this.service.getTasks(localStorage.getItem("logged-in-user-id")).subscribe((res:any)=>{
      this.tasks=res;
      console.log("SUCCESS get task");
    },(error:any)=>{
      console.log("Error get task");
    })
  }


  deleteTask(id){
    this.service.deleteTask(id).subscribe((res:any)=>{
      
      console.log("SUCCESS delete task");
      this.getTasks();

    },(error:any)=>{
      console.log("Error delete task");
    })
  }

  getUserInfo(){
    this.service.getUserInfo(localStorage.getItem("logged-in-email")).subscribe((res:any)=>{

      this.user=res;
      localStorage.setItem("logged-in-user-id",this.user.user_id);

      console.log("SUCCESS");
    },(error:any)=>{
      console.log("Error");
    })
  }

    
  async  getapi(url)
  {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
  }





}
