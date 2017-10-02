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
/*
 Generated class for the PaymentMethodPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var PaymentMethodPage = (function () {
    function PaymentMethodPage(nav) {
        this.nav = nav;
    }
    // apply change method
    PaymentMethodPage.prototype.changeMethod = function (method) {
        // go back
        this.nav.pop();
    };
    return PaymentMethodPage;
}());
PaymentMethodPage = __decorate([
    Component({
        selector: 'page-payment-method',
        templateUrl: 'payment-method.html'
    }),
    __metadata("design:paramtypes", [NavController])
], PaymentMethodPage);
export { PaymentMethodPage };
//# sourceMappingURL=payment-method.js.map