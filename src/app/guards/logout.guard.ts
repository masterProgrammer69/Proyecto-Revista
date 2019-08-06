import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  
  constructor(private userService:UserService,private router:Router){}

  canActivate()
  {
    console.log("guard:"+this.userService.getInformacionUser());
    if(this.userService.getInformacionUser()=="null")
    {
      console.log("guard:No esta logueado!")   
      return true;
    }else
    {
      console.log("guard:esta logueado!")
      this.router.navigate(["/autor/lista-de-articulos"]);
      return false;
    }
  }
}
