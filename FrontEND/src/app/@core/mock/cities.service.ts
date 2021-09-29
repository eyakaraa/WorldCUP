import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Cities, CitiesData } from '../data/cities';

@Injectable()
export class CitiesService extends CitiesData {

  private cities: Cities[] = [
    {
      title: 'Doha',
      description: 'As you may know by now, most of the action of the 2022 FIFA World Cup will take place in Doha, the nation \'s capital. Established in 1825, it held a population of 2,382,000 people as of 2018\.This beautiful city is located on the coast of the Persian Gulf, and its quick economic and political expansion has made it one of the most luxurious places on earth. Its name comes from the Arabic term "dohat", with means "roundness."',
      source: 'assets/images/Doha.jpg',
    },
    {
      title: 'Al-Khor',
      description: 'Al-Khor City\'s name comes from the word "creek", as the original settlements of the town were originally over a creek. Now, it\'s one of the biggest cities in the country thanks to its huge oil industry\. Despite its massive growth and wealth, Al-Khor City isn\'t exactly the most populated area of the nation. In fact, most of its inhabitants are workers from the oil industry. Still, it has plenty of historical venues all tourists would love to visit, like the Al-Khor Towers.',
      source: 'assets/images/Khor.jpg',
    },
    {
      title: 'Al-Wakrah',
      description: 'North of Doha, we\'ll find the beautiful coastal town of Al-Wakrah, right at the edge of the eastern side of the Persian Gulf. Originally conceived as a port town and mostly focused on fishing and sea-related ventures, it\'s now Qatar\'s second-largest city\. Even though Al-Wakrah is one of the most impotrant cities in the nation, it holds a population of just 87,970 people as of 2015. It also has plenty of touristic venues, such as the Wakrah Trade Center and Wakrah Sands.',
      source: 'assets/images/Wakrah.jpg',
    },
    {
      title: 'Al-Rayyan',
      description: 'Contrary to popular belief, Al-Rayyan and Doha aren\'t the same. As a matter of fact, Al-Rayyan is the third-largest municipality in the nation, and even though it\'s pretty close to Doha, it\'s more of a suburb than an actual part of the city\. Al-Rayyan City went through a major expansion to bring together the "Old" and "New" parts of the city, combining the traditional villages with the top-tier luxurious venues where Qatar\'s wealthiest people live.',
      source: 'assets/images/Rayyan.jpg',
    },
  ];

  getCitiesData(): Observable<Cities[]> {
    return observableOf(this.cities);
  }
}
