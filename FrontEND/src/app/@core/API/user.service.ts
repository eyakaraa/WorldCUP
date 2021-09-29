import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserS, UserSData } from '../data/entities/UserS';

@Injectable({
    providedIn: 'root'
})
 export class UserSService extends UserSData {

   
    
     url='http://localhost:3501/';
     constructor(private http: HttpClient){
         super();
     }
     
handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status},`+`body was: ${error.error} `);
        }
        return throwError(
          'Something bad happened; please try again later.');
      }

    
      getAllUser(token): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<UserS[]>(this.url+"users", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    deleteUser(token,id: number) {
        
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"supprimeruser/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
            );
    }
    afficherUser(token,id: number): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
       
        return this.http.get<UserS>(this.url+"user/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    updateUser(token,  _idUser:number,
        _nom:string,
        _prenom:string,
       _numTel:number,
       _dateNaissance:Date,
        username:string,
        password:string): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.put<UserS>(this.url+'updateuser/'+_idUser,_nom, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    saveUser(_nom:string,
        _prenom:string,
       _numTel:number,
       _dateNaissance:Date,
        username:string,
        password:string): Observable<any> {
           let req:any ={
                "_nom":_nom,
                "_prenom":_prenom,
                "_numTel":_numTel,
                "username":username,
                "password":password,
                "_dateNaissance":_dateNaissance,
                "roles":[{"id":2,"name": "USER","description": "Utilisateur de l'Application"}]
            }
              return this.http.post<UserS>(this.url+'signup', req).pipe(
            catchError(this.handleError)
        );
    }
    getUser(token,email:string):Observable<any>{

        let tokenStr = 'Bearer ' + token;
     
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<UserS>(this.url+'getUser/'+email, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }

 }
  