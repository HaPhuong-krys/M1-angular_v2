import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArticleFormComponent } from './ajouter-article-form.component';

describe('AjouterArticleFormComponent', () => {
  let component: AjouterArticleFormComponent;
  let fixture: ComponentFixture<AjouterArticleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterArticleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterArticleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
