import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from './Match';
import { Role } from './Role';

export class UserS {
    _idUser:number;
    _nom:string;
    _prenom:string;
   _numTel:number;
    username:string;
    password:string;
   _dateNaissance:Date;
    role:Role[];
    matchs:Match[];
    constructor(){}
}

export abstract class UserSData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllUser(token): Observable<any>;
  abstract deleteUser(token,id:number): any;
  abstract afficherUser(token,id:number):Observable<UserS>;
  abstract updateUser(token,  _idUser:number,
    _nom:string,
    _prenom:string,
   _numTel:number,
   _dateNaissance:Date,
    username:string,
    password:string):Observable<UserS>;
  abstract saveUser(_nom:string,
    _prenom:string,
   _numTel:number,
   _dateNaissance:Date,
    username:string,
    password:string):Observable<UserS>;
  abstract getUser(token,email:string):Observable<UserS>;

}