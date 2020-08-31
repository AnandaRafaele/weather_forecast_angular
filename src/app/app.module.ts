import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//NG ZOHO
import { NzAvatarModule, NzDividerModule } from 'ng-zorro-antd';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { BannerComponent } from './components/templates/banner/banner.component';
import { ForecastDaysComponent } from './components/templates/forecast-days/forecast-days.component';
import { ForecastCardsComponent } from './components/utils/forecast-cards/forecast-cards.component';
import { PlaceToVisitComponent } from './components/utils/place-to-visit/place-to-visit.component';
import { LocationCardsComponent } from './components/utils/location-cards/location-cards.component';
import { ForecastBalloonsComponent } from './components/templates/forecast-balloons/forecast-balloons.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ForecastDaysComponent,
    ForecastCardsComponent,
    PlaceToVisitComponent,
    LocationCardsComponent,
    ForecastBalloonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzAvatarModule,
    NzDividerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
