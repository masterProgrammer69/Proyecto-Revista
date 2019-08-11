import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNoVerificadoComponent } from './email-no-verificado.component';

describe('EmailNoVerificadoComponent', () => {
  let component: EmailNoVerificadoComponent;
  let fixture: ComponentFixture<EmailNoVerificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailNoVerificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailNoVerificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
