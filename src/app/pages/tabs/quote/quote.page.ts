import { Component, OnInit } from '@angular/core';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {



  //this page displays a randomly generated quote everyday

  date : any;
  quotes_count: any;
  random_quote: any;
  constructor(public service: MyAPIsService) { }

  ngOnInit() {

    this.random_quote=[{quote:"initial"},{author:"initial"}];
    this.getDate();
    this.getQuotesCount();
  }


  //this function simply saves today's date in the correct formate into the "date" variable

getDate(){
  let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
this.date=cDay+"/"+cMonth+"/"+cYear;


}

//this function calls the getQuotesNumber api to know how many quotes exist in the database

getQuotesCount(){
  this.service.getQuotesNumber().subscribe((res:any)=>{
    console.log("SUCCESS count",res,this.quotes_count);
    this.quotes_count=res["count(*)"];
    console.log("SUCCESS count",res,this.quotes_count);
    this.getRandomQuote();


  },(error:any)=>{
    console.log("Error count");
  })
}



//after retrieving the number of quotes in the database with the function above, we are interested in getting a 
//random quote whose id is a random number between 0 and the number of quote in the table.
//if the api request is successful, we save the song info into the "random _quote" variable.
getRandomQuote(){
  var rand_index=Math.floor(Math.random() * (this.quotes_count+1));


  this.service.getRandomQuote(rand_index).subscribe((res:any)=>{
    console.log("SUCCESS random",res);
    this.random_quote=res;

  },(error:any)=>{
    console.log("Error random");
  })

}

}
