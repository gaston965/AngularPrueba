import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaPruebaComponent } from './ventana-prueba.component';

describe('VentanaPruebaComponent', () => {
  let component: VentanaPruebaComponent;
  let fixture: ComponentFixture<VentanaPruebaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaPruebaComponent]
    });
    fixture = TestBed.createComponent(VentanaPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
