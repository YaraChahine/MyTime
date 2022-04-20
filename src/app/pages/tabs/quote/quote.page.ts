import { Component, OnInit } from '@angular/core';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {


  date : any;
  quotes_count: any;
  random_quote: any;
  constructor(public service: MyAPIsService) { }

  ngOnInit() {

    this.random_quote=[{quote:"initial"},{author:"initial"}];
    this.getDate();
    this.getQuotesCount();
  }



getDate(){
  let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
this.date=cDay+"/"+cMonth+"/"+cYear;


}


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
