import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioVerificacionComponent } from './envio-verificacion.component';

describe('EnvioVerificacionComponent', () => {
  let component: EnvioVerificacionComponent;
  let fixture: ComponentFixture<EnvioVerificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioVerificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioVerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
