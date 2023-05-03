import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneFixComponent } from './telephone-fix.component';

describe('TelephoneFixComponent', () => {
  let component: TelephoneFixComponent;
  let fixture: ComponentFixture<TelephoneFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
