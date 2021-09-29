import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StatistiqueModule } from './statistique/statistique.module';
import { GetTicketModule } from './get-ticket/get-ticket.module';
import { PanierModule } from './panier/panier.module';
import { MatchModule } from './match/match.module';
import { LoginModule } from './Login/login.module';
import { RegisterModule } from './register/register.module';
import { ProfilModule } from './profil/profil.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    RegisterModule,
    LoginModule,
    PanierModule,
    GetTicketModule,
    StatistiqueModule,
    MatchModule,
    ProfilModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
