import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitarEvaluadorComponent } from './invitar-evaluador.component';

describe('InvitarEvaluadorComponent', () => {
  let component: InvitarEvaluadorComponent;
  let fixture: ComponentFixture<InvitarEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitarEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitarEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
