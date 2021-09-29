import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { FlagData } from '../data/flag';

@Injectable({
  providedIn: 'root'
})
export class FlagService extends FlagData {

  urlGetCode = 'https://flagcdn.com/en/codes.json';
    constructor(private http: HttpClient) {
      super();
    }
    handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
      }
      getCode(): Observable<any> {
        return this.http.get<Pays>(this.urlGetCode).pipe(
          catchError(this.handleError)
        );
      }
       getImg(code:string):string{
         return "https://flagcdn.com/"+code+".svg";
       }















       getPays(): Observable<any> {
        return this.http.get<Map<string, string>>(this.urlGetCode).pipe(
          catchError(this.handleError)
        );
      }
}

export interface Pays {
  nom:String;
}