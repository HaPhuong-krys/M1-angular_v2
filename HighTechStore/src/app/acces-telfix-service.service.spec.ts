import { TestBed } from '@angular/core/testing';

import { AccesTelfixServiceService } from './acces-telfix-service.service';

describe('AccesTelfixServiceService', () => {
  let service: AccesTelfixServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesTelfixServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
