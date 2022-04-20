import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

let getID = '';
export interface User{
  user_id?: number;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Password: string;
}



export interface Item{

  item_name: string;
  item_image: string;
  item_category_name: string;
  item_subcategory_name: string;
  item_description: string;
  item_type: string;
  item_price:any;
}
@Injectable({
  providedIn: 'root'
})
export class MyAPIsService {



  private url = 'http://localhost/capstone_apis/';

  constructor(private http: HttpClient) {

  }
  checkUser(user: User){
    return this.http.post(this.url + 'logIn.php', user);
  }
  addUser(user: User){
    return this.http.post(this.url + 'SignUp.php', user);
  }


}