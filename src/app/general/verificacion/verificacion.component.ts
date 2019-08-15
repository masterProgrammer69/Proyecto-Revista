import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})
export class VerificacionComponent implements OnInit {

  
  constructor(private route:ActivatedRoute) { }

  idToken:string="";

  ngOnInit() {
    this.idToken=this.getUrlParameter("token");
  }

  getUrlParameter = (token: string)=>{
    return this.route.snapshot.paramMap.get(token);
  }

}
