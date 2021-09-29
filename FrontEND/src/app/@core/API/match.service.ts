import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Match, MatchData } from '../data/entities/Match';
@Injectable({
    providedIn: 'root'
})
 export class MatchService extends MatchData {
   
   
    
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

    
      getAllMatch(token): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.get<Match[]>(this.url+"matchs", {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    deleteMatch(token,id: number) {
        
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.delete(this.url+"supprimerematch/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
            );
    }
    afficherUnMatch(token,id: number): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
       
        return this.http.get<Match>(this.url+"match/"+id, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    updateMatch(token,match: Match): Observable<any> {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.put<Match>(this.url+'updatematch/'+match.id,match, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
    createMatch(token,match: Match): Observable<any> {
        
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set('Authorization', tokenStr);
        return this.http.post<Match>(this.url+'addmatch', match, {headers, responseType: 'text' as 'json' }).pipe(
            catchError(this.handleError)
        );
    }
 }