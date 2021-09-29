import { Observable } from 'rxjs';

export interface Stadium {
  title: string;
  description: string;
  source:string;

}

export abstract class StadiumData {
  abstract getStadiumData(): Observable<Stadium[]>;
}
