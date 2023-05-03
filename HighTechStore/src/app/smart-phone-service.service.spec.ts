import { TestBed } from '@angular/core/testing';

import { SmartPhoneServiceService } from './smart-phone-service.service';

describe('SmartPhoneServiceService', () => {
  let service: SmartPhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartPhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
