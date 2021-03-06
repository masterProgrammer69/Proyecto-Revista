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
    if(this.userService.getInformacionUser()=="null" ||this.userService.getInformacionUser()==null)
    {  
      return true;
    }else
    {
      if(this.userService.getRol()=="autor")
      {
        this.router.navigate(["/autor/lista-de-articulos"]);
      }
      else if(this.userService.getRol()=="editor")
      {
        this.router.navigate(["/editor"]);
      }
      else if(this.userService.getRol()=="evaluador")
      {
        this.router.navigate(["/evaluador"]);
      }  
      return false;
    }
  }
}
