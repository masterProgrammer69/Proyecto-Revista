import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEdicionComponent } from './crear-edicion.component';

describe('CrearEdicionComponent', () => {
  let component: CrearEdicionComponent;
  let fixture: ComponentFixture<CrearEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
