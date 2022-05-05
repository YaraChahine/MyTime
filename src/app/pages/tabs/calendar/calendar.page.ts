import { Component, OnInit } from '@angular/core';
import { MyAPIsService } from 'src/app/services/my-apis.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

 
  date : any;
  songs_count: any;
  random_song: any;
  constructor(public service: MyAPIsService) { }

//This page was supposed to be a calendar (hence the name), but I then decided to make it a daily random song generator
//which displays a random song for the user everyday, with today's date and a link to the song on youtube.


  ngOnInit() {

    this.random_song=[{song_name:"initial"},{song_singer:"initial"},{song_link:"initial"}];

    //we call the apis required to display the song on the app
    this.getDate();
    this.getSongsCount();
  }




  //this function simply saves today's date in the correct formate into the "date" variable
getDate(){
  let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
this.date=cDay+"/"+cMonth+"/"+cYear;


}



//this function calls the getSongsNumber api to know how many songs exist in the database
getSongsCount(){
  this.service.getSongsNumber().subscribe((res:any)=>{
    console.log("SUCCESS count",res,this.songs_count);
    this.songs_count=res["count(*)"];
    console.log("SUCCESS count",res,this.songs_count);
    this.getRandomSong();


  },(error:any)=>{
    console.log("Error count");
  })
}


//after retrieving the number of songs in the database with the function above, we are interested in getting a 
//random song whose id is a random number between 0 and the number of songs in the table.
//if the api request is successful, we save the song info into the "random song" variable.
getRandomSong(){
  var rand_index=Math.floor(Math.random() * (this.songs_count+1));


  this.service.getRandomSong(rand_index).subscribe((res:any)=>{
    console.log("SUCCESS random",res);
    this.random_song=res;

  },(error:any)=>{
    console.log("Error random");
  })

}

}

