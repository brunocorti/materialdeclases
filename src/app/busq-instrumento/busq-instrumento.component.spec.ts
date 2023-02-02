import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusqInstrumentoComponent } from './busq-instrumento.component';

describe('BusqInstrumentoComponent', () => {
  let component: BusqInstrumentoComponent;
  let fixture: ComponentFixture<BusqInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusqInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusqInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
