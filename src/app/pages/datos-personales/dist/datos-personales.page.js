"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatosPersonalesPage = void 0;
var core_1 = require("@angular/core");
var DatosPersonalesPage = /** @class */ (function () {
    function DatosPersonalesPage() {
        this.text = 'Volver atrás';
        this.icon = 'arrow-undo';
        this.nombre = 'David';
        this.apellidos = 'Del Olmo Martín-Albo';
        this.email = 'daviddel.olmo.13@gmail.com';
        this.localidad = 'La Solana';
        this.password = 'eduardoArizaReillo';
        this.cursando = '2º DAM';
        this.edad = '22';
        this.font = 'Berlin Sans FB';
        this.telf = '92677777';
    }
    DatosPersonalesPage.prototype.doRefresh = function (event) {
        console.log('Empieza la operación async');
        setTimeout(function () {
            console.log('La operación async ha acabado');
            event.target.complete();
        }, 1000);
    };
    DatosPersonalesPage.prototype.ngOnInit = function () {
    };
    DatosPersonalesPage = __decorate([
        core_1.Component({
            selector: 'app-datos-personales',
            templateUrl: './datos-personales.page.html',
            styleUrls: ['./datos-personales.page.scss']
        })
    ], DatosPersonalesPage);
    return DatosPersonalesPage;
}());
exports.DatosPersonalesPage = DatosPersonalesPage;
