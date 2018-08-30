import { Component, OnInit, Input } from '@angular/core';
import { TaskViewModel } from '../../models/task-view-model';

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.css']
})
export class TaskStatsComponent implements OnInit {

  @Input()
  tasks : TaskViewModel[];
  closedTasksCount : number = 0;
  constructor() { }

  ngOnInit() {
    this.tasks.forEach(element => {
      //if(element.status == 'closed')
    });
  }

}
