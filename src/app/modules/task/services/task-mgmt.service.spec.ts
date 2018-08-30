import { TestBed, inject } from '@angular/core/testing';

import { TaskMgmtService } from './task-mgmt.service';

describe('TaskMgmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskMgmtService]
    });
  });

  it('should be created', inject([TaskMgmtService], (service: TaskMgmtService) => {
    expect(service).toBeTruthy();
  }));
});
