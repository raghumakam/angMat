import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementIndexComponent } from './task-management-index.component';

describe('TaskManagementIndexComponent', () => {
  let component: TaskManagementIndexComponent;
  let fixture: ComponentFixture<TaskManagementIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagementIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
