import { Component, OnInit } from '@angular/core';
//import { RecaptchaLoaderService } from 'ng-recaptcha';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  //public ready: Observable<ReCaptchaV2.ReCaptcha>;
  password="";

  constructor() {
    //let readySubject = new BehaviorSubject<ReCaptchaV2.ReCaptcha>(grecaptcha);
    //this.ready = readySubject.asObservable();
   }

  ngOnInit() {
  }

}
