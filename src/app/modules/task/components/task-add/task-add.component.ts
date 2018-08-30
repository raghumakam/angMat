import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '../../../utils/public-apis';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaskViewModel } from '../../index';
import { TaskMgmtService } from '../../services/task-mgmt.service';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})

export class TaskAddComponent implements OnInit {

  public addTaskForm : FormGroup;
  public taskStatuses : string[];
  targetDateConfig : any = { min : new Date()};
  addingInProgress : boolean = false;

  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor
  (
    private messageService : MessageService
    , private router : Router
    , private fb : FormBuilder
    , private taskService : TaskMgmtService
  ) 
  {
    this.addTaskForm = this.generateForm(new TaskViewModel());
    this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    ); 
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  
  addTask()
  {
    let taskToAdd = this.addTaskForm.value as TaskViewModel;
    this.addingInProgress = true;
    this.taskService.addTask(taskToAdd).subscribe
    (
      success => {
        this.addingInProgress = false;
        this.messageService.msg('Added successfully');
        this.addTaskForm.reset();
        this.router.navigate(['']);
      },
      err => {
        this.messageService.msg(err);
      }
    );
    
  }

  generateForm(taskViewmodel : TaskViewModel) : FormGroup
  {
    let form = this.fb.group
    ({
      title : [taskViewmodel.title, Validators.required],
      description : [taskViewmodel.description, Validators.required],
      targetDate : [taskViewmodel.targetDate, Validators.required],
    });   
    return form;
  }

  
  ngOnInit() {
  }

}
