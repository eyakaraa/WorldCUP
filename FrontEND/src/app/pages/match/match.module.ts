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
  NbSearchModule,
  NbAlertModule,
  NbAutocompleteModule,
  NbInputModule,
  NbCheckboxModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatchComponent } from './match.component';
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
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NbSearchModule,
    IvyCarouselModule,
    NgxEchartsModule,
    NbAlertModule,
    NbAutocompleteModule,
    NbInputModule,
    NbCheckboxModule,
    NbDatepickerModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MatchComponent,
  ],
})
export class MatchModule { }
