import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireOrdiComponent } from './accessoire-ordi.component';

describe('AccessoireOrdiComponent', () => {
  let component: AccessoireOrdiComponent;
  let fixture: ComponentFixture<AccessoireOrdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireOrdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoireOrdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
