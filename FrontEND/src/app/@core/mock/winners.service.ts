import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Winner, WinnersData } from '../data/winners';

@Injectable()
export class WinnersService extends WinnersData{

  private winners: Winner[] = [
    {
    date: '2018',
    country:'France',   
    source: 'fr',
    host: 'Russia',
    },

    {
        date: '2014',
        country:'Germany',   
        source: 'de',
        host: 'Brazil',
        },

    {
            date: '2010',
            country:'Spain',   
            source:'es',
            host: 'South Africa',
        },
    {
            date: '2006',
            country:'Itay',   
            source:'it',
            host: 'Germany',
        },
    {
            date: '2002',
            country:'Brazil',   
            source:'br',
            host: 'Sk, Japan',
        },
    {
            date: '1998',
            country:'France',   
            source:'fr',
            host: 'France',
        },
    {
            date: '1994',
            country:'Brazil',   
            source:'br',
            host: 'United States ',
        },
    {
            date: '1990',
            country:'West Germany',   
            source:'de',
            host: 'Italy ',
        },
    {
            date: '1986',
            country:'Argentina',   
            source:'ar',
            host: 'Mexico ',
        },
    {
            date: '1982',
            country:'West Germany',   
            source:'de',
            host: 'West Germany ',
        },

    
  ];

  getWinnersData(): Observable<Winner[]> {
    return observableOf(this.winners);
  }
}


