import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class EditorMode implements  CanActivate{
  
  constructor(private userService:UserService,private router:Router){}

  canActivate()
  {
    console.log("guarde-:"+this.userService.getInformacionUser());
    if(this.userService.getInformacionUser()==null || this.userService.getInformacionUser()=="null")
    {
      console.log("guard-e:no esta logueado")
      return false;
    }else
    {
      if(this.userService.getRol()=="editor"){
        console.log("guard-e:Esta logeado como editor")
        return true;
    }
      else{
        console.log("guard-e:Esta logeado de otra forma")
  }
}
}
}
