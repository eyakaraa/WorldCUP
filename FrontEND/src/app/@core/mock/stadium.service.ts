import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Stadium, StadiumData } from '../data/stadium';

@Injectable()
export class StadiumService extends StadiumData {
 
  private stadiums:Stadium[] = [
    {
      title:"Al-Rayyan Stadium",
      description:"Al Rayyan Stadium is a currently under construction new stadium that is being built to serve as one of the playing venues of the 2022 World Cup in Qatar. The stadium is being built in place of the old Ahmed Bin Ali Stadium, home of Al Rayyan SC. The final designs were presented in 2015, and foundation works started in late 2016. The stadium is scheduled to be completed in 2019. Al Rayyan Stadium will have a capacity of roughly 40,000 seats. After the World Cup, nearly half of those will be removed again. Its standout feature is the facade that incorporates various symbols of Qatari culture and is inspired by the sand dunes of the nearby desert. During the World Cup, the stadium is eligible to host matches up to the quarter-final.",
      source: 'assets/images/alrayyan.jpg',
    },
    {
      title:"Al Thumama Stadium",
      description:"The Al Thumama Stadium is one of seven stadiums, which are built for the FIFA World cup Qatar 2022. It is located near Hamad International Airport.A joint venture between Al Jaber Engineering of Qatar and Tekfen Construction of Turkey is significantly involved in the construction work. The architectural design, by the Chief Architect of Arab Engineering Bureau Ibrahim Jaidah, takes its inspiration from the traditional taqiyah hat, a traditional cap which is worn by men and boys across the middle east. A 50,000 m2 (540,000 sq ft) public park will surround the stadium. The stadium has a capacity 40,000 seats. Its completion is expected for 2021.",
      source: 'assets/images/doha2.jpg',
    },
    {
      title:"Khalifa International Stadium",
      description:"Khalifa International Stadium has been Qatar’s principal football stadium since 1976. The stadium was built to serve as the flagship venue for the 1976 Gulf Cup that was held in Qatar and could initially hold 20,000 spectators. Over the years, the stadium has been upgraded several times, most notably for the 2006 Asian Games, which increased capacity to 40,000 seats. In 2011, Khalifa International Stadium hosted multiple matches including the final between Japan and Australia (1-0) during the 2011 Asian Cup",
      source: 'assets/images/khalifanew.jpg',
    },
    {
      title:"Lusail Stadium",
      description:"Lusail Stadium, also known as Lusail Iconic Stadium, is a planned new stadium that will be the flagship venue of the 2022 World Cup in Qatar. The stadium is expected to host both the opening match and final. The stadium is expected to have a capacity of around 80,000 seats, which is likely to get reduced after the World Cup. Lusail Stadium is getting built in the new Lusail City development on the northern edge of Doha on the Persian Gulf coast, roughly 20 kilometres from central Doha. Lusail City will be a mixed self-contained development of residences, commerce, and retail in which 200,000 inhabitants are expected to live. A new metro light rail line will connect the stadium with central Doha.",
      source: 'assets/images/lusail.jpg',
    },
    {
      title:"Education City Stadium",
      description:"Qatar Foundation Stadium, also known as Education City Stadium, is a currently under construction stadium that will be one of the playing venues of the 2022 World Cup that is held in Qatar. Qatar Foundation Stadium is designed to reflect a diamond in the desert. The stadium will have a capacity of roughly 40,000 seats, which will make it eligible to host matches up to the quarter-final at the World Cup. After the tournament, the capacity will be reduced again to 25,000 seats.  The stadium will be connected with the rest of Doha by a currently under construction new metro line.",
      source: 'assets/images/doha3.jpg',
    },
    {
      title:"Al-Janoub Stadium",
      description:"Al-Janoub Stadium, formerly known as Al-Wakrah Stadium, is a football stadium in Al-Wakrah, Qatar that was inaugurated on 16 May 2019. It was designed by Iraqi-British architect Zaha Hadid together with the firm AECOM. The stadium features a curvilinear postmodernist and neo-futurist design. The appearance of the roof was inspired by the sails of traditional Dhow boats, used by pearl divers from the region, weaving through currents of the Persian Gulf. It will be the official seat of the football club Al-Wakrah SC, where matches for the Qatar Stars League will be held. The capacity of the stadium is 40,000, which is expected to reduce in half to 20,000 after the World Cup.",
      source: 'assets/images/alwakrah.jpg',
    },
    {
      title:"Al Bayt Stadium",
      description:"Al Bayt Stadium, also known as Al Khor Stadium, is a currently under construction stadium that is getting built to serve as a playing venue of the 2022 World Cup in Qatar. Al Bayt Stadium will have a capacity of roughly 60,000 seats divided over three tiers. After the World Cup, the top tier will be removed again, reducing capacity to 32,000 seats. During the World Cup, the stadium is expected to host one of the semi-finals. Al Bayt Stadium is getting built on the south-eastern edge of the small city of Al Khor City, which is located on the Persion Gulf roughly 40 kilometres north of Doha.",
      source: 'assets/images/alkhor.jpg',
    },
  ];

  getStadiumData(): Observable<Stadium[]> {
    return observableOf(this.stadiums);
  }
}