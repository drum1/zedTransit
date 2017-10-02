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
import { NavController } from 'ionic-angular';
import { DriverService } from '../../services/driver-service';
import { DriverPage } from '../driver/driver';
/*
  Generated class for the FindingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FindingPage = (function () {
    function FindingPage(nav, driverService) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        // get list drivers
        this.drivers = driverService.getAll();
        setTimeout(function () {
            _this.nav.push(DriverPage);
        }, 5000);
    }
    return FindingPage;
}());
FindingPage = __decorate([
    Component({
        selector: 'page-finding',
        templateUrl: 'finding.html'
    }),
    __metadata("design:paramtypes", [NavController, DriverService])
], FindingPage);
export { FindingPage };
//# sourceMappingURL=finding.js.map