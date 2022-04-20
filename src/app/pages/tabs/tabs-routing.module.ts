import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children :[
      {
        path: 'to-do',
        loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoPageModule)
      } ,
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'timer',
        loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
      },
      {
        path: 'pomodoro',
        loadChildren: () => import('./pomodoro/pomodoro.module').then( m => m.PomodoroPageModule)
      },
      {
        path: 'quote',
        loadChildren: () => import('./quote/quote.module').then( m => m.QuotePageModule)
      },
      {
        path: '',
        loadChildren: () => import('./to-do/to-do.module').then( m => m.ToDoPageModule)
      } 
    ]
  },
 
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
