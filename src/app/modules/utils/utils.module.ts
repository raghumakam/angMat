import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

import { MessageService, NavBarComponent, TimeAgoPipe, TimeDurationPipe } from './index';

const services = [
  MessageService
];

const components = [
  NavBarComponent
];

const pipes = [
  TimeAgoPipe, 
  TimeDurationPipe
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [...components, ...pipes ],
  providers :[
    ...services
  ],
  exports: [ ...components, ...pipes  ]
})
export class UtilsModule { }
