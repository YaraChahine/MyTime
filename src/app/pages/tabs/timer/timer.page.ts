import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})



//this page is a timer which really just takes the hours and imnutes and seconds from the user and starts the timer
//it stops when it reaches 0,
// it can be paused and resumed

export class TimerPage implements OnInit {
   hours  :any; 
   minutes:number; 
   seconds:number; 
   hrs    :any; 
   mins   :any; 
   time   :any; 
   paused: Boolean;
   public demo   :any=0;
   t:any;
 
   
  constructor(public  toastController: ToastController) { this.time=0; this.paused=false;}

  ngOnInit() {
  
  }

  ngAfterContentInit(){

   
  }
  @ViewChild('myElement') myElement: ElementRef;


  async startTimer(){
    clearInterval(this.t);
//the user must enter correct values for the hours, minutes and seconds
    if (this.hours>24 || this.hours<0){
      const toast = await this.toastController.create({
        message: 'Caution : Please enter an Hour value between 0 and 24. ',
        duration: 2000
      });
      toast.present();
     return;
    }
    else{
        if(this.minutes>60 || this.minutes<0){
          const toast = await this.toastController.create({
            message: 'Caution : Please enter a Minutes value between 0 and 60. ',
            duration: 2000
          });
          toast.present();
            return;
        }
        else{
            if(this.seconds>60 || this.seconds<0){
              const toast = await this.toastController.create({
                message: 'Caution : Please enter a Seconds value between 0 and 60. ',
                duration: 2000
              });
              toast.present();           
                 return;
            }
        }
      }
    this.time=(this.hours*60*60)+(this.minutes*60) + (this.seconds);
    this.t= setInterval(() => {this.updateTime();},1000);

  }
updateTime(){
  this.time--;
  if (this.time==0){
clearInterval(this.t);
  }
}


timer() {

  try{
  console.log("second function started");

  console.log(this.time);
    if(this.time>=0){

    var hours = Math.floor(this.time / (60 * 60));
    var t=this.time-(hours*60*60);
    var minutes = Math.floor(t / 60);
    var seconds = this.time % 60;
console.log(this.time);
this.myElement=this.time;
console.log(this.myElement);

    if (this.time<0){

        clearInterval(t);
    }
}
var currentTime= hours + ":" +minutes +":"+seconds+"";
return currentTime;}
catch(err){
  console.log("oups");
}
  }
 async start() {
   console.log("timer started");
  //  this.hours = parseInt(document.getElementById("hrs").value);//.toString();
  //  this.minutes = parseInt(document.getElementById("minutes").value);//toString();
  //  this.seconds = parseInt(document.getElementById("seconds").value);//toString();
  if (this.hours>24 || this.hours<0){
    const toast = await this.toastController.create({
      message: 'Caution : Please enter an Hour value between 0 and 24. ',
      duration: 2000
    });
    toast.present();
   return;
  }
  else{
      if(this.minutes>60 || this.minutes<0){
        const toast = await this.toastController.create({
          message: 'Caution : Please enter a Minutes value between 0 and 60. ',
          duration: 2000
        });
        toast.present();
          return;
      }
      else{
          if(this.seconds>60 || this.seconds<0){
            const toast = await this.toastController.create({
              message: 'Caution : Please enter a Seconds value between 0 and 60. ',
              duration: 2000
            });
            toast.present();           
               return;
          }
      }
  }

   var interval=1000;

   var hrs = this.hours * 60 *60;
   var mins = this.minutes*60 ;
    this.time = hrs + mins + this.seconds;
    var time=this.time;
    console.log(this.time);
    console.log(hrs);

  clearInterval(this.t);
  this.t=setInterval(function(){  
    console.log("second function started");

    console.log(time);
      if(time>=0){

      var hours = Math.floor(time / (60 * 60));
      var t=time-(hours*60*60);
      var minutes = Math.floor(t / 60);
      var seconds = time % 60;
console.log(time);
this.myElement=time;
console.log(this.myElement);

      time--;
      if (time<0){

          clearInterval(t);
      }
  }
  return this.myElement;
    }, interval);

      }
  
 

   
     

  
 



 stop() {
  clearInterval(this.t);
  document.getElementById("demo").innerHTML =  "0h 0m 0s";
  this.time=0;

}

 pause(){
  clearInterval(this.t);
  this.paused=true;
}
 resume(){
  clearInterval(this.t);
  this.paused=false;
  this.t= setInterval(() => {this.updateTime();},1000);

  // this.t=setInterval(updateCountdown, 1000);
  // function updateCountdown() {
  //     if(this.time>=0){

  //     var hours = Math.floor(this.time / (60 * 60));
  //     var t=this.time-(hours*60*60);
  //     var minutes = Math.floor(t / 60);
  //     var seconds = this.time % 60;

  //     document.getElementById("demo").innerHTML = hours + "h "
  //         + minutes + "m " + seconds + "s ";
  //     this.time--;
  //     if (this.time<0){

  //         clearInterval(t);
  //     }}

//}

}
}