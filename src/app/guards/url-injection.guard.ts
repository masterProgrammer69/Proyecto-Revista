import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UrlInjectionGuard implements  CanActivate{
  
  constructor(private userService:UserService,private router:Router){}

  canActivate()
  {
    console.log("guard1-:"+this.userService.getInformacionUser());
    if(this.userService.getInformacionUser()==null || this.userService.getInformacionUser()=="null")
    {
      console.log("guard-1:no esta logueado")
      this.router.navigate(["/home"]);
      return false;
    }else
    {
      console.log("guard-1:esta logueado")
      return true;
    }
  }
}
