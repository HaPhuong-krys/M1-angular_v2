import { TestBed } from '@angular/core/testing';

import { PcBureauServiceService } from './pc-bureau-service.service';

describe('PcBureauServiceService', () => {
  let service: PcBureauServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcBureauServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
