import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedMascotaComponent } from './aed-mascota.component';

describe('AedMascotaComponent', () => {
  let component: AedMascotaComponent;
  let fixture: ComponentFixture<AedMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AedMascotaComponent]
    });
    fixture = TestBed.createComponent(AedMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
