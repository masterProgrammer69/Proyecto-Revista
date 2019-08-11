import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificadoComponent } from './email-verificado.component';

describe('EmailVerificadoComponent', () => {
  let component: EmailVerificadoComponent;
  let fixture: ComponentFixture<EmailVerificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
