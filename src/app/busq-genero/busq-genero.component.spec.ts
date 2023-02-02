import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqGeneroComponent } from './busq-genero.component';

describe('BusqGeneroComponent', () => {
  let component: BusqGeneroComponent;
  let fixture: ComponentFixture<BusqGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
