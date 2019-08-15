import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-invitar-evaluador',
  templateUrl: './invitar-evaluador.component.html',
  styleUrls: ['./invitar-evaluador.component.css']
})
export class InvitarEvaluadorComponent implements OnInit {
  userFormGroup:FormGroup;

  formGroupCreator():FormGroup{
    return new FormGroup({
      pNombre:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
    });
  }

  constructor() { 
    this.userFormGroup=this.formGroupCreator();
  }

  ngOnInit() {
  }

  get pNombre(){
    return this.userFormGroup.get('pNombre');
  }

  get email(){
    return this.userFormGroup.get('email');
  }

  invitarEvaluador()
  {

  }
}
