import { TestBed } from '@angular/core/testing';

import { TelephoneFixServiceService } from './telephone-fix-service.service';

describe('TelephoneFixServiceService', () => {
  let service: TelephoneFixServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelephoneFixServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
