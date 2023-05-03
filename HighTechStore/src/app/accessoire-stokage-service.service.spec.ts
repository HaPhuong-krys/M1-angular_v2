import { TestBed } from '@angular/core/testing';

import { AccessoireStokageServiceService } from './accessoire-stokage-service.service';

describe('AccessoireStokageServiceService', () => {
  let service: AccessoireStokageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoireStokageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
