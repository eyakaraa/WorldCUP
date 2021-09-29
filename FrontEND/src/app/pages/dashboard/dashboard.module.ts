import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbPopoverModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { RoomsComponent } from './rooms/rooms.component';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HostCitiesComponent } from './host-cities/host-cities.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { PlayerComponent } from './rooms/player/player.component';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbPopoverModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    IvyCarouselModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    HostCitiesComponent,
    RoomSelectorComponent,
    PlayerComponent,
    RoomsComponent,
  ],
})
export class DashboardModule { }
