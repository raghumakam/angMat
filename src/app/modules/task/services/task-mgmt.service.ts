import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings,  } from '../../../index';
import { TaskViewModel } from '..';

@Injectable()
export class TaskMgmtService {

  constructor(private http : HttpClient) { }

  baseApiName : string = "taskMgmt";

  addTask(task : TaskViewModel) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/add`;
    let body = task;
    return this.http.post<any>(url, body);
  }

  getTasks() : Observable<any>
  {
    let url : string = `${AppSettings.ApiBaseUrl}/${this.baseApiName}`;
    return this.http.get(url)
  }

  getTask(id : number) : Observable<any>
  {
    let url = '';
    return this.http.put(url, {});
  }

  startTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/start`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

  pauseTask(id : string) : Observable<any>
  {
    let url = `${AppSettings.ApiBaseUrl}/${this.baseApiName}/pause`;
    let body = { taskId : id};
    return this.http.post(url, body);
  }

}
