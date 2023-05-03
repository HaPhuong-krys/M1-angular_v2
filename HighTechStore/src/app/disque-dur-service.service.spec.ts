import { TestBed } from '@angular/core/testing';

import { DisqueDurServiceService } from './disque-dur-service.service';

describe('DisqueDurServiceService', () => {
  let service: DisqueDurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisqueDurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
