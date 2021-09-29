import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { FlagData, Pays } from '../../@core/data/flag';
import { SolarData } from '../../@core/data/solar';
import { Stadium, StadiumData } from '../../@core/data/stadium';
import { Winner, WinnersData } from '../../@core/data/winners';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };
  pays: Pays[];
  winners:Winner[];
  stadiums: Stadium[];
  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              public flagService: FlagData,
              private WinnersService:WinnersData,
              private StadiumService:StadiumData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }
  ngOnInit() {
     this.getPays();
     this.WinnersService.getWinnersData()
     .pipe(takeWhile(() => this.alive))
     .subscribe((Winner: Winner[]) => {
      Winner.forEach(element => element.source= this.flagService.getImg(element.source))
       this.winners = Winner;
     });
     this.StadiumService.getStadiumData()
     .pipe(takeWhile(() => this.alive))
     .subscribe((stadiums: Stadium[]) => {
       this.stadiums = stadiums;
     });
    console.log(localStorage.getItem("id"));
  }
 
  getPays(): void {
    this.flagService.getCode().pipe(takeWhile(() => this.alive)).subscribe((resp: any) => {
      this.pays = resp;
      console.log(this.pays["tn"]);
    });
  }

 

  ngOnDestroy() {
    this.alive = false;
  }
}
