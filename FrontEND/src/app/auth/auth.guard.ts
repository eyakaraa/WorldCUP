import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): boolean {
    console.log(location);
    console.log(localStorage.getItem("id"));
    if(localStorage.getItem("id")===null){
      this.router.navigateByUrl('/pages/dashboard');
      return false;
    }else if(localStorage.getItem("id")==="1"){
  
           if((this.router.url.includes('/pages/panier')===true)||(this.router.url.includes('/pages/getTicket')===true)){
            this.router.navigateByUrl('/pages/dashboard');
            return false;
           }
    }else {
      if(this.router.url.includes('/pages/statistique')){
        this.router.navigateByUrl('/pages/dashboard');
        return false;
       }
    }
    return true;
  }


  }

