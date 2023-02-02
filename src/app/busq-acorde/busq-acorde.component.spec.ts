import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqAcordeComponent } from './busq-acorde.component';

describe('BusqAcordeComponent', () => {
  let component: BusqAcordeComponent;
  let fixture: ComponentFixture<BusqAcordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqAcordeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqAcordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
