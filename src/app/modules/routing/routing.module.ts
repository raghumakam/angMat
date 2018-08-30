import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskModule, TaskListComponent, TaskManagementIndexComponent, TaskAddComponent } from '../task/public-apis';

const taskRoutes : Routes = 
[
  { path : '', component: TaskListComponent}
  , { path : 'add', component: TaskAddComponent}
]
const routes : Routes = 
[
  { path : '', redirectTo: 'task',  pathMatch: 'full'}
  , { path : 'task', component: TaskManagementIndexComponent, children : [...taskRoutes]}
  , {path: '**', redirectTo: '', pathMatch : 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    TaskModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation:  "reload", useHash:  true}),
  ],
  declarations: [
  ],
  exports :[  ]
})
export class RoutingModule { }
