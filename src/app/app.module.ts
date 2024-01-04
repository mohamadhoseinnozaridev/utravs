import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { Hotel_main_pageComponent } from './page/hotel_main_page/hotel_main_page.component';
import { Search_boxComponent } from './components/body/search_box/search_box.component';
import { AdvertisingComponent } from './components/body/advertising/advertising.component';
import { Introducing_appComponent } from './components/body/introducing_app/introducing_app.component';
import { Instgram_appComponent } from './components/footer/instgram_app/instgram_app.component';
import { Footer_hotelComponent } from './components/footer/footer_hotel/footer_hotel.component';
import { RegisterComponent } from './Model/Register/Register.component';
import { Serch_cityComponent } from './Model/Register/serch_city/serch_city.component';
import { Hotel_serchComponent } from './page/hotel_main_page/hotel_serch/hotel_serch.component';
import { Serch_CalendarComponent } from './Model/Register/serch_Calendar/serch_Calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    Hotel_main_pageComponent,
    NavbarComponent,
    Search_boxComponent,
    AdvertisingComponent,
    Introducing_appComponent,
    Instgram_appComponent,
    Footer_hotelComponent,
    RegisterComponent,
    Serch_cityComponent,
    Hotel_serchComponent,
    Serch_CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
