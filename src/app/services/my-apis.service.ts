import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

let getID = '';
export interface User{
  user_id?: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
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


}