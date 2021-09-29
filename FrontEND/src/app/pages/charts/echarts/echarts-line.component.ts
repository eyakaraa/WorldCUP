import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import { MatchService } from '../../../@core/API/match.service';
import { UserSService } from '../../../@core/API/user.service';
import { Match } from '../../../@core/data/entities/Match';
import { UserS } from '../../../@core/data/entities/UserS';

@Component({
  selector: 'ngx-echarts-line',
  template: `
  <ngx-charts-bar-vertical
    [scheme]="colorScheme"
    [results]="chart"
    [xAxis]="showXAxis"
    [yAxis]="showYAxis"
    [legend]="showLegend"
    [xAxisLabel]="xAxisLabel"
    [yAxisLabel]="yAxisLabel">
  </ngx-charts-bar-vertical>
`,
})
export class EchartsLineComponent implements OnDestroy {
  chart =[];
  users:UserS[];
  nbUsers:number;
  results:any[]=[];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Age';
  yAxisLabel = 'numberUser';
  colorScheme: any;
  themeSubscription: any;
  age:number=0;
  res:any[]=[];
  constructor(private theme: NbThemeService,private userService:UserSService) {
   
    let token=localStorage.getItem("token");
    this.userService.getAllUser(token).subscribe(
      data =>{
        this.users=JSON.parse(data);
         this.nbUsers=this.users.length;
         this.calculNumber[0]=0;
         this.calculNumber[1]=0;
         this.calculNumber[2]=0;
         this.calculNumber[3]=0;
        this.users.forEach(element => {
        
          this.age = new Date().getFullYear() -new Date(element._dateNaissance).getFullYear();
          
         if( this.age<18){
           this.calculNumber[0]=this.calculNumber[0]+1;
         }else if( this.age<30){
           this.calculNumber[1]=this.calculNumber[1]+1;
         }else if( this.age<50){
           this.calculNumber[2]=this.calculNumber[2]+1;
         }else {
           this.calculNumber[3]=this.calculNumber[3]+1;
         }
         this.age=0;
         });
         console.log(this.calculNumber[0]);
         this.results.push({ name: '<18', value: this.calculNumber[0] });
         this.results.push({ name: '18-30', value: this.calculNumber[1] });
         this.results.push({ name: '30-50', value: this.calculNumber[2] });
         this.results.push({ name: '>50', value: this.calculNumber[3] });
        
     console.log(this.results);
     this.chart=this.results;
     Object.assign(this, this.results);
      }
    );
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }
  calculNumber:number[]=[];
  ngOnInit(): void {
   
  }
  
  


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
