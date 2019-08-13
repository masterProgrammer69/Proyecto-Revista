import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Injectable({
  providedIn: 'root'
})
export class AutorGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){}

  canActivate()
  {
    if(this.userService.getRol()=="autor")
    {
      return true;
    }
    else
    {
      if(this.userService.getRol()=="editor")
      {
        this.router.navigate(["/editor"]);
      }
      else
      {
        this.router.navigate(["/evaluador"]);
      }
    }
  }
}
