import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEditorComponent } from './registrar-editor.component';

describe('RegistrarEditorComponent', () => {
  let component: RegistrarEditorComponent;
  let fixture: ComponentFixture<RegistrarEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
