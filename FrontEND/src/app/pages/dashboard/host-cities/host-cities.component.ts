import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbComponentSize, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';

import { Cities, CitiesData } from '../../../@core/data/cities';

@Component({
  selector: 'ngx-host-cities',
  templateUrl: './host-cities.component.html',
  styleUrls: ['./host-cities.component.scss']
})
export class HostCitiesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  cities: Cities[];
  selectedCitie: Cities;
  isSingleView = false;
  actionSize: NbComponentSize = 'medium';

  constructor(
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
    private citiesService: CitiesData,
  ) {}

  ngOnInit() {
    this.citiesService.getCitiesData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cities: Cities[]) => {
        this.cities = cities;
        this.selectedCitie = this.cities[0];
      });

    const breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(map(([, breakpoint]) => breakpoint.width))
      .subscribe((width: number) => {
        this.actionSize = width > breakpoints.md ? 'medium' : 'small';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCitie(c: any) {
    this.selectedCitie = c;
    this.isSingleView = true;
  }
}

