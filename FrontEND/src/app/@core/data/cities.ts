import { Observable } from 'rxjs';

export interface Cities {
  title: string;
  description: string;
  source: string;
}

export abstract class CitiesData {
  abstract getCitiesData(): Observable<Cities[]>;
}
