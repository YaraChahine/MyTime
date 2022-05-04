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

  ngOnInit() {

    this.random_song=[{song_name:"initial"},{song_singer:"initial"},{song_link:"initial"}];
    this.getDate();
    this.getSongsCount();
  }



getDate(){
  let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
this.date=cDay+"/"+cMonth+"/"+cYear;


}


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

