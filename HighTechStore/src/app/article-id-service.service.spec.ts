import { TestBed } from '@angular/core/testing';

import { ArticleIdServiceService } from './article-id-service.service';

describe('ArticleIdServiceService', () => {
  let service: ArticleIdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleIdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
