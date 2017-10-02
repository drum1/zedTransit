var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { PlacesPage } from '../places/places';
import { PaymentMethodPage } from '../payment-method/payment-method';
import { FindingPage } from "../finding/finding";

var google;
/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(nav, platform, alertCtrl) {
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // map id
        this.mapId = Math.random() + 'map';
        // map height
        this.mapHeight = 480;
        // show - hide booking form
        this.showForm = false;
        // show - hide modal bg
        this.showModalBg = false;
        // list vehicles
        this.vehicles = [
            {
                name: 'Taxi',
                icon: 'icon-taxi',
                active: true
            },
            {
                name: 'SUV',
                icon: 'icon-car',
                active: false
            },
            {
                name: 'Car',
                icon: 'icon-sedan',
                active: false
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // init map
        this.initMap();
    };
    // toggle form
    HomePage.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
        this.showModalBg = (this.showForm == true);
    };
    // toggle active vehicle
    HomePage.prototype.toggleVehicle = function (index) {
        for (var i = 0; i < this.vehicles.length; i++) {
            this.vehicles[i].active = (i == index);
        }
    };
    HomePage.prototype.initMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(21.0318202, 105.8495298);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById(this.mapId), mapOptions);
        // get ion-view height
        var viewHeight = window.screen.height - 44; // minus nav bar
        // get info block height
        var infoHeight = document.getElementsByClassName('booking-info')[0].scrollHeight;
        // get booking form height
        var bookingHeight = document.getElementsByClassName('booking-form')[0].scrollHeight;
        // set map height = view height - info block height + booking form height
        this.mapHeight = viewHeight - infoHeight + bookingHeight;
        var options = { timeout: 120000, enableHighAccuracy: true };
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
        // use GPS to get center position
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.setCenter(newLatLng);
            new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
        }, function (error) {
            console.log(error);
        }, options);
    };
    // Show note popup when click to 'Notes to driver'
    HomePage.prototype.showNotePopup = function () {
        var prompt = this.alertCtrl.create({
            title: 'Notes to driver',
            message: "",
            inputs: [
                {
                    name: 'note',
                    placeholder: 'Note'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    // Show promote code popup when click to 'Promote Code'
    HomePage.prototype.showPromoPopup = function () {
        var prompt = this.alertCtrl.create({
            title: 'Promo code',
            message: "",
            inputs: [
                {
                    name: 'note',
                    placeholder: 'Promo code'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    // go to next view when the 'Book' button is clicked
    HomePage.prototype.book = function () {
        // hide booking form
        this.toggleForm();
        // go to finding page
        this.nav.push(FindingPage);
    };
    // choose pickup place
    HomePage.prototype.choosePlace = function () {
        // go to places page
        this.nav.push(PlacesPage);
    };
    // choose payment method
    HomePage.prototype.choosePaymentMethod = function () {
        // go to payment method page
        this.nav.push(PaymentMethodPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, Platform, AlertController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map