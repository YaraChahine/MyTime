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


  //api that checks if a user is in the database whenever a user attempts to log in
  checkUser(user: User){
    return this.http.post(this.url + 'logIn.php', user);
  }

  //signing up api, it adds the newly registered user to the database
  addUser(user: User){
    return this.http.post(this.url + 'SignUp.php', user);
  }



  //retrieves user info to be used in other pages, some are saved in the local storage to be used as parameters in other apis (such as user_id)
  getUserInfo(email : string) {
    return this.http.get(this.url + 'getUserInfo.php?email='+email);

  }



  //api to add a task to the todo list
  addTask(id : any, task : string) {
    return this.http.get(this.url + 'addTask.php?id='+id+'&task='+task);

  }

  
  //api that displays the previously added tasks to the screen
  getTasks(id : any) {
    return this.http.get(this.url + 'getTasks.php?id='+id);

  }


  //api responsible of deleting a task when a user crosses it.
  deleteTask(id : any ){
    return this.http.get(this.url + 'deleteTask.php?id='+id);

  }


  //This api returns the number of quotes in the database to know the range within which the system should load a random number
  //to generate a random quote everyday
  getQuotesNumber(){
    return this.http.get(this.url + 'getQuotesNumber.php');

  }


  //Retrieves a random quote whenever a user logs in to the application.
  getRandomQuote(id){
    return this.http.get(this.url + 'getRandomQuote.php?id='+id);

  }


  //same as getQuotesNumber above but for songs
  getSongsNumber(){
    return this.http.get(this.url + 'getSongsNumber.php');

  }

//same as getRandomQuote above but for songs
  getRandomSong(id){
    return this.http.get(this.url + 'getRandomSong.php?id='+id);

  }


  //post request that adds a goal form the user to the database
  addGoal(goal: Goal){
    return this.http.post(this.url + 'addGoal.php', goal);
  }


  //displays previously added goals to the screen
  getGoals(id : any) {
    return this.http.get(this.url + 'getGoals.php?id='+id);

  }


  //displays previously added milestones to the screen
  getMilestones(id : any) {
    return this.http.get(this.url + 'getMilestones.php?id='+id);

  }
}
