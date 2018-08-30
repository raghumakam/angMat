import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { UtilsModule } from '../utils/public-apis';

import  {TaskManagementIndexComponent, TaskStatsComponent, TaskListComponent, TaskAddComponent, TaskMgmtService} from './index';

const components = [
    TaskManagementIndexComponent
  , TaskStatsComponent
  , TaskListComponent
  , TaskAddComponent
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialDesignModule,
    UtilsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...components],
  exports :[
    ...components
  ],
  providers :[
    TaskMgmtService
  ]
})
export class TaskModule { }
