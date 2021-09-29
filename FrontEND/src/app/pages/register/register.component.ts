import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSData,UserS } from '../../@core/data/entities/UserS';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  static erreur=false;
  public classReference = RegisterComponent;
  erreurInvalidName:boolean=false;
  erreurInvalidLast:boolean=false;
  erreurInvalidEmail:boolean=false;
  erreurInvalidPass:boolean=false;
  erreurInvalidTel:boolean=false;
  erreurInvalidDate:boolean=false;
  constructor(private formBilder:FormBuilder,private authService:AuthService,private userService : UserSData,private router:Router ) { 

    let registerFormControls={

      passFormControl : new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      
      ]),
      emailFormControl : new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      nameFormControl : new FormControl('', [
        Validators.required
      ]),
      lastnameFormControl : new FormControl('', [
        Validators.required,
       
      ]),
      phoneFormControl : new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      dateFormControl : new FormControl('', [
        Validators.required,
      
      ]),
  
    }
    this.registerForm=formBilder.group(registerFormControls);
    

  }

get email(){
    return this.registerForm.get('emailFormControl');
}
get password(){
    return this.registerForm.get('passFormControl');
}
get name(){
  return this.registerForm.get('nameFormControl');
}
get lastname(){
  return this.registerForm.get('lastnameFormControl');
}
get date(){
  return this.registerForm.get('dateFormControl');
}
get phone(){
  return this.registerForm.get('phoneFormControl');
}

authRequest:any;

onSubmit() {
  this.erreurInvalidName=false;
  this.erreurInvalidLast=false;
  this.erreurInvalidPass=false;
  this.erreurInvalidEmail=false;
  this.erreurInvalidTel=false;
  this.erreurInvalidDate=false;
  let existeDisabled=false;

   if (this.name.invalid===true)
     {
    this.erreurInvalidName=true;
    this.name.reset();
    existeDisabled=true;
   }
   if (this.lastname.invalid===true)
   {
  this.erreurInvalidLast=true;
  this.lastname.reset();
  existeDisabled=true;
 }
 
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

if (this.phone.invalid===true)
{
this.erreurInvalidTel=true;
this.phone.reset();
existeDisabled=true;
}
if (this.date.invalid===true)
{
this.erreurInvalidDate=true;
this.date.reset();
existeDisabled=true;
}
if(existeDisabled){
  return;
}
   

  let  p:String=this.phone.value.toString();
  let pp=p.substring(1,p.length);

 this.authService.signup(this.name.value,this.lastname.value,Number(pp),this.date.value,this.email.value,this.password.value);


}


  ngOnInit(): void {
  }

}
