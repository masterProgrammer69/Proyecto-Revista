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
    if(this.userService.getInformacionUser()==null || this.userService.getInformacionUser()=="null")
    {
      this.router.navigate(["/home"]);
      return false;
    }else
    {
      return true;
    }
  }
}
