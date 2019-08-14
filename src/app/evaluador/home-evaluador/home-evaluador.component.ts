import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-evaluador',
  templateUrl: './home-evaluador.component.html',
  styleUrls: ['./home-evaluador.component.css']
})
export class HomeEvaluadorComponent implements OnInit {

  boolModalActivo:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  envioInfoEvaluador():void{
    alert("Se envio correctamente")
  }


}
