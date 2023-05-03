import { TestBed } from '@angular/core/testing';

import { AccesOrdiServiceService } from './acces-ordi-service.service';

describe('AccesOrdiServiceService', () => {
  let service: AccesOrdiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesOrdiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
