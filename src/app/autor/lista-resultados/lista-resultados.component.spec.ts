import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResultadosComponent } from './lista-resultados.component';

describe('ListaResultadosComponent', () => {
  let component: ListaResultadosComponent;
  let fixture: ComponentFixture<ListaResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
