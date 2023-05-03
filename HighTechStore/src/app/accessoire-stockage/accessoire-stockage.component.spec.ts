import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireStockageComponent } from './accessoire-stockage.component';

describe('AccessoireStockageComponent', () => {
  let component: AccessoireStockageComponent;
  let fixture: ComponentFixture<AccessoireStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireStockageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoireStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
