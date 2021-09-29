import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../data/entities/jwt-client';
import { UserS } from '../data/entities/UserS';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private httpClient: HttpClient,private router:Router) { }


  public generateToken(request){
    return this.httpClient.post<string>("http://localhost:3501/token/generate-token", request, {  responseType: 'text' as 'json' });
  }































  
  public canActivate(location:any){
    if(localStorage.getItem("id")===null){
      this.router.navigateByUrl('/pages/dashboard');
    }else if(localStorage.getItem("id")==="1"){
           if((location==='/pages/panier')&&(location==='/pages/getTicket')){
            this.router.navigateByUrl('/pages/dashboard');
           }
    }else {
      if(location==='/pages/statistique'){
        this.router.navigateByUrl('/pages/dashboard');
       }
    }
  }


 
}