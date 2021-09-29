import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from '../../@core/API/jwt-client.service';
import { UserSService } from '../../@core/API/user.service';
import { JWTData } from '../../@core/data/entities/jwt-client';
import { Role } from '../../@core/data/entities/Role';
import { UserS } from '../../@core/data/entities/UserS';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm:FormGroup;
   static erreur=false;
   public classReference = LoginComponent;
   
  constructor(private formBilder:FormBuilder,private authService:AuthService,private jwtService:JwtClientService,private userService:UserSService,private router:Router) { 
    
    
    let loginFormControls={
        passFormControl : new FormControl('', [
            Validators.required,
            Validators.minLength(8)
          
          ]),
          emailFormControl : new FormControl('', [
            Validators.required,
            Validators.email
            
          ]),
      }
    this.loginForm=formBilder.group(loginFormControls);
  }

  get email(){
      return this.loginForm.get('emailFormControl');
  }
  get password(){
      return this.loginForm.get('passFormControl');
  }
  authRequest:any;
  user:UserS;
  role:Role[];
  erreurInvalidEmail:boolean=false;
  erreurInvalidPass:boolean=false;
  onSubmit() {
    this.erreurInvalidPass=false;
    this.erreurInvalidEmail=false;
    let existeDisabled=false;

    if (this.email.invalid===true)
 {
this.erreurInvalidEmail=true;
this.email.reset();
existeDisabled=true;
}

if (this.password.invalid===true)
{
this.erreurInvalidPass=true;
this.password.reset();
existeDisabled=true;
}
if(existeDisabled){
  return;
}

  this.authService.login(this.email.value,this.password.value);
   
  }
  ngOnInit(): void {
  }

}

