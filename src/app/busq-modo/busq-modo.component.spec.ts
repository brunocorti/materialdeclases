import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqModoComponent } from './busq-modo.component';

describe('BusqModoComponent', () => {
  let component: BusqModoComponent;
  let fixture: ComponentFixture<BusqModoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqModoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
