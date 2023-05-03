import { TestBed } from '@angular/core/testing';

import { UsbServiceService } from './usb-service.service';

describe('UsbServiceService', () => {
  let service: UsbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
