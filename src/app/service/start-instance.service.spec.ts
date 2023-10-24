import { TestBed } from '@angular/core/testing';

import { StartInstanceService } from './start-instance.service';

describe('StartInstanceService', () => {
  let service: StartInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
