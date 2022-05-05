import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomodoroPageRoutingModule } from './pomodoro-routing.module';

import { PomodoroPage } from './pomodoro.page';
import { AddGoalPage } from '../add-goal/add-goal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomodoroPageRoutingModule
  ],
  declarations: [PomodoroPage,AddGoalPage],
  entryComponents : [AddGoalPage]

})
export class PomodoroPageModule {}
