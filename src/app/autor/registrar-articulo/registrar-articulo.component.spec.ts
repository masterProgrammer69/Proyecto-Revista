import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarArticuloComponent } from './registrar-articulo.component';

describe('RegistrarArticuloComponent', () => {
  let component: RegistrarArticuloComponent;
  let fixture: ComponentFixture<RegistrarArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
