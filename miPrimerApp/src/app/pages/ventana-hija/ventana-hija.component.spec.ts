import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaHijaComponent } from './ventana-hija.component';

describe('VentanaHijaComponent', () => {
  let component: VentanaHijaComponent;
  let fixture: ComponentFixture<VentanaHijaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaHijaComponent]
    });
    fixture = TestBed.createComponent(VentanaHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
