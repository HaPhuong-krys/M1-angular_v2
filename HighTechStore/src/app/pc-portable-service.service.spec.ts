import { TestBed } from '@angular/core/testing';

import { PcPortableServiceService } from './pc-portable-service.service';

describe('PcPortableServiceService', () => {
  let service: PcPortableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcPortableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
