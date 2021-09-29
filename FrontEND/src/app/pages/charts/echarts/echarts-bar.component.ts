import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-bar',
  template: `
  <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class EchartsBarComponent implements OnDestroy {
  
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['1930','1934','1938','1950', '1954', '1958', '1962', '1966', '1970', '1974','1978','1982','1986','1990','1994','1998','2002','2006','2010','2014','2018'],
        datasets: [{
          data: [24.139,23.235,26.833,60.773,36.269,24.800,24.250,50.459,52.312,46.685,42.374,35.698,46.297,48.411,68.626,44.676,42.571,52.609,49.499,53.592,47.371],
          label: 'Average attendance per game',
          backgroundColor: NbColorHelper.hexToRgbA(colors.successLight, 0.8),
        }, {
          data: [434.500, 395.000, 483.000, 1337.000, 943.000, 868.000, 776.000, 1614.677,1673.975,1774.022,1670.215,1856.277,2407.431,2527.348,3568.567,2859.234,2724.604,3367.000,3167.984,3429.873,3031.768],
          label: 'Total affluence',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
