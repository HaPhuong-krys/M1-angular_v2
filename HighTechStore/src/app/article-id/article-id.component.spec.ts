import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleIdComponent } from './article-id.component';

describe('ArticleIdComponent', () => {
  let component: ArticleIdComponent;
  let fixture: ComponentFixture<ArticleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
