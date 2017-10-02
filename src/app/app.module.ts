import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';

// import services
import {DriverService} from '../services/driver-service';
import {NotificationService} from '../services/notification-service';
import {PlaceService} from '../services/place-service';
import {TripService} from '../services/trip-service';
// end import services

// import pages
import { DriverPage} from '../pages/driver/driver';
import { FindingPage} from '../pages/finding/finding';
import { HistoryPage} from '../pages/history/history';
import { HomePage} from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import { ModalRatingPage} from '../pages/modal-rating/modal-rating';
import { NotificationPage} from '../pages/notification/notification';
import { PaymentMethodPage} from '../pages/payment-method/payment-method';
import { PlacesPage} from '../pages/places/places';

import { ProfilePage} from '../pages/profile/profile';
import { RegisterPage} from '../pages/register/register';
import { SupportPage} from '../pages/support/support';
import { TrackingPage} from '../pages/tracking/tracking';
import { ModalAutocompleteOne } from  '../pages/auto_search/auto_one';
//import { AgmCoreModule } from '@agm/core';

// end import pages

import { ModalAutocompleteTwo } from  '../pages/auto_search/auto_two';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';

@NgModule({
  declarations: [
    MyApp,
    DriverPage,
    FindingPage,
    HistoryPage,
    HomePage,
    LoginPage,
    ModalRatingPage,
    NotificationPage,
    PaymentMethodPage,
    ProfilePage,
    RegisterPage,
    SupportPage,
    TrackingPage,
    ModalAutocompleteOne,
    ModalAutocompleteTwo
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DriverPage,
    FindingPage,
    HistoryPage,
    HomePage,
    LoginPage,
    ModalRatingPage,
    NotificationPage,
    PaymentMethodPage,
    RegisterPage,
    SupportPage,
    TrackingPage,
    ModalAutocompleteOne,
    ModalAutocompleteTwo
],
  providers: [
    DriverService,
    NotificationService,
    PlaceService,
    TripService,
    GoogleMapsProvider
    /* import services */
]
})
export class AppModule {}
