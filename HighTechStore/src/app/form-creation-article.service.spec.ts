import { TestBed } from '@angular/core/testing';

import { FormCreationArticleService } from './form-creation-article.service';

describe('FormCreationArticleService', () => {
  let service: FormCreationArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCreationArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
