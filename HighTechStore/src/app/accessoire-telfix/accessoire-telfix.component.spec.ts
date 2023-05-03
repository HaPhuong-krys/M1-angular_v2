import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireTelfixComponent } from './accessoire-telfix.component';

describe('AccessoireTelfixComponent', () => {
  let component: AccessoireTelfixComponent;
  let fixture: ComponentFixture<AccessoireTelfixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireTelfixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoireTelfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
