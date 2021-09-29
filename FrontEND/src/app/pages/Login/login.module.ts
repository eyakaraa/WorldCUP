import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  NbCheckboxModule,
  NbInputModule,
  NbDatepickerModule,
  NbAlertModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ThemeModule,
    NbAlertModule,
    NbCardModule,
    NbUserModule,
    NbPopoverModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbInputModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbButtonModule,
    IvyCarouselModule,
    NgxEchartsModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule { }



