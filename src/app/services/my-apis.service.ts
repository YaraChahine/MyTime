import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AnyForUntypedForms } from '@angular/forms';

let getID = '';
export interface User{
  user_id?: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

export interface Goal{
  goal_id?:any;
  user_id: any;
  goal_title:   string    ;
  goal_deadline:   any ;
  goal_milestones1: any;
  goal_milestones2: any;
  goal_milestones3: any;

}


@Injectable({
  providedIn: 'root'
})
export class MyAPIsService {



  private url = 'http://localhost/mobile_apis/';

  constructor(private http: HttpClient) {

  }
  checkUser(user: User){
    return this.http.post(this.url + 'logIn.php', user);
  }
  addUser(user: User){
    return this.http.post(this.url + 'SignUp.php', user);
  }


  getUserInfo(email : string) {
    return this.http.get(this.url + 'getUserInfo.php?email='+email);

  }


  addTask(id : any, task : string) {
    return this.http.get(this.url + 'addTask.php?id='+id+'&task='+task);

  }

  
  getTasks(id : any) {
    return this.http.get(this.url + 'getTasks.php?id='+id);

  }

  deleteTask(id : any ){
    return this.http.get(this.url + 'deleteTask.php?id='+id);

  }

  getQuotesNumber(){
    return this.http.get(this.url + 'getQuotesNumber.php');

  }


  getRandomQuote(id){
    return this.http.get(this.url + 'getRandomQuote.php?id='+id);

  }


  
  getSongsNumber(){
    return this.http.get(this.url + 'getSongsNumber.php');

  }


  getRandomSong(id){
    return this.http.get(this.url + 'getRandomSong.php?id='+id);

  }

  addGoal(goal: Goal){
    return this.http.post(this.url + 'addGoal.php', goal);
  }

  getGoals(id : any) {
    return this.http.get(this.url + 'getGoals.php?id='+id);

  }

  getMilestones(id : any) {
    return this.http.get(this.url + 'getMilestones.php?id='+id);

  }
}
