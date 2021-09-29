import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbListModule,
  NbTabsetModule,
  NbPopoverModule,
  NbAutocompleteModule,
  NbAlertModule,
  NbSearchModule,
  

} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { profilComponent } from './profil.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbListModule,
  NbTabsetModule,
  NbPopoverModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NbSearchModule,
    NbAlertModule,
    NbAutocompleteModule,
    ReactiveFormsModule,
  ],
  declarations: [
    profilComponent,
  ],
})

export class ProfilModule { }
