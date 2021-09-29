import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserS } from '../@core/data/entities/UserS';
import { UserSService } from '../@core/API/user.service';
import { JwtClientService } from '../@core/API/jwt-client.service'
import { Router } from '@angular/router';
import { LoginComponent } from '../pages/Login/login.component';
import { RegisterComponent } from '../pages/register/register.component';

const tokenName = 'token';
export interface T{
  token:string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isLogged$ = new BehaviorSubject(false);
  private Utilisateur=new UserS();
  constructor(private http: HttpClient,public jwtService: JwtClientService,private userService: UserSService,public router: Router) {

  }

  public get isLoggedIn(): boolean {
    return localStorage.getItem("id")!==null;
  }
  gettoken:T;

  authRequest:any;


  public login(email,pass){
    this.authRequest ={
      "username":email,
      "password":pass
    }
    let resp=this.jwtService.generateToken(this.authRequest);
    resp.subscribe(data=>{
    
     this.gettoken=JSON.parse(data);
     localStorage.setItem("token",this.gettoken.token);
     console.log(localStorage.getItem("token"));
  
    this.userService.getUser(this.gettoken.token,email).subscribe(
      data=>{
       this.Utilisateur=JSON.parse(data);
       console.log(this.Utilisateur);
       localStorage.setItem("id",this.Utilisateur._idUser.toString());
  localStorage.setItem("nom",this.Utilisateur._nom);
  localStorage.setItem("prenom",this.Utilisateur._prenom);
  localStorage.setItem("dateN",this.Utilisateur._dateNaissance.toString());
  localStorage.setItem("tel",this.Utilisateur._numTel.toString());
  localStorage.setItem("username",this.Utilisateur.username);
  localStorage.setItem("password",this.Utilisateur.password);  
  localStorage.setItem("matchs",JSON.stringify(this.Utilisateur.matchs));
      console.log(localStorage.getItem("id"));
       
      this.router.navigateByUrl('/pages/dashboard');

    }
    ,
  error => {
    console.log(error);
    LoginComponent.erreur=true;
 console.log("getuser");
}
    );},
  error => {
    console.log(error);
  console.log("generate");
  LoginComponent.erreur=true;
}
  );

}

  public logout() {
    localStorage.clear();
    localStorage.removeItem("id");
   
   
  }

  public signup(name,lastname,phone,date,email,pass){
    this.router.navigateByUrl('/pages/login');
    RegisterComponent.erreur=false;
    console.log(phone);
    this.userService.saveUser(name,lastname,phone,date,email,pass).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/pages/login');
     
      },
      error => {
      console.log(error);

      RegisterComponent.erreur=true;
    
      
      }
      );
    
  }

  public get authToken(): string {
    return localStorage.getItem(tokenName);
  }

  public get userData(): UserS {
    // send current user or load data from backend using token
    return this.loadUser();
  }

  private loadUser():UserS {
    // use request to load user data with token

   
    // it's fake and useing only for example

    if (localStorage.getItem('id')) {
       this.Utilisateur._idUser=Number(localStorage.getItem('id'));
       this.Utilisateur._nom=localStorage.getItem('nom');
       this.Utilisateur._prenom=localStorage.getItem('prenom');
       this.Utilisateur._dateNaissance=new Date(localStorage.getItem('dateN'));
       this.Utilisateur._numTel=Number(localStorage.getItem('tel'));
       this.Utilisateur.username=localStorage.getItem('username');
       this.Utilisateur.password=localStorage.getItem('password');
       this.Utilisateur.matchs=JSON.parse(localStorage.getItem('matchs'));
    }
    return this.Utilisateur;
  }
  
}
