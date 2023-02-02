import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqTecnicaComponent } from './busq-tecnica.component';

describe('BusqTecnicaComponent', () => {
  let component: BusqTecnicaComponent;
  let fixture: ComponentFixture<BusqTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
