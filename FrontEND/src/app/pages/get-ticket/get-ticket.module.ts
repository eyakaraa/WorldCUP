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
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { GetTicketComponent } from './get-ticket.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NgxPaginationModule} from 'ngx-pagination';
import {

  NbCheckboxModule,
  NbTreeGridModule,
  NbDatepickerModule, 
  NbInputModule,
} from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NbSearchModule,
    NbTreeGridModule,
    NbDatepickerModule, 
    NbInputModule,
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
    GetTicketComponent,
  ],
})
export class GetTicketModule { }
