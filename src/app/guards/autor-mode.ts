import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AutorMode implements  CanActivate{
  
  constructor(private userService:UserService,private router:Router){}

  canActivate()
  {
    console.log("guarde-:"+this.userService.getInformacionUser());
    if(this.userService.getInformacionUser()==null || this.userService.getInformacionUser()=="null")
    {
      console.log("guard-a:no esta logueado")
      return false;
    }else
    {
      if(this.userService.getRol()=="autor"){
        console.log("guard-a:Esta logeado como autor")
        return true;
    }
      else{
        console.log("guard-e:Esta logeado de otra forma")
  }
}
}
}
