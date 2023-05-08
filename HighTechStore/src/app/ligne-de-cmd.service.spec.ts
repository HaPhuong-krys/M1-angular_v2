import { TestBed } from '@angular/core/testing';

import { LigneDeCmdService } from './ligne-de-cmd.service';

describe('LigneDeCmdService', () => {
  let service: LigneDeCmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneDeCmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
