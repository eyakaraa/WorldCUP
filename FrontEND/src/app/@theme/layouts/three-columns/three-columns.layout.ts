import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header *ngIf="isLoginRoute()" fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>
      
      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {
  constructor(private router: Router) {}

  isLoginRoute() {
    return this.router.url !== '/pages/login'&& this.router.url !== '/pages/register';
  }
}
