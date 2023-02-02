import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqDificultadComponent } from './busq-dificultad.component';

describe('BusqDificultadComponent', () => {
  let component: BusqDificultadComponent;
  let fixture: ComponentFixture<BusqDificultadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqDificultadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
