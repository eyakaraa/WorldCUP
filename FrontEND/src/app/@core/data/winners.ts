import { Observable } from 'rxjs';

export interface Winner {
  date: string;
  country:string;
  source: string;
  host: string;
}

export abstract class WinnersData {
  abstract getWinnersData(): Observable<Winner[]>;
}