import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Match {
id:number;	
_dateMatch:Date;
_premiereEquipe:string;
_deuxiemeEquipe:string;
_stade:string;
_nbSpectateur:number;
prix: number;

 constructor(){
   
 }

}

export abstract class MatchData {
  abstract  handleError(error: HttpErrorResponse): any
  abstract getAllMatch(token): Observable<any>;
  abstract deleteMatch(token,id:number): any;
  abstract afficherUnMatch(token,id:number):Observable<Match>;
  abstract updateMatch(token,match:Match):Observable<Match>;
  abstract createMatch(token,match:Match):Observable<Match>;
}
