import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pays {
    code:String;
    nom:String;
}



export abstract class FlagData {
  abstract handleError(error: HttpErrorResponse): any;
  abstract getCode(): Observable<Pays>;
  abstract getImg(code:string):string;




















  abstract getPays(): Observable<Map<string, string>>;

}
