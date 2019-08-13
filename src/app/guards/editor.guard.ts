import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../servicios/user.service';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements  CanActivate {
  constructor(private userService:UserService,private router:Router){}

  canActivate()
  {
    if(this.userService.getRol()=="editor")
    {
      return true;
    }
    else
    {
      if(this.userService.getRol()=="autor")
      {
        this.router.navigate(["/autor/lista-de-articulos"]);
      }
      else
      {
        this.router.navigate(["/evaluador"]);
      }
    }
  } 
}
