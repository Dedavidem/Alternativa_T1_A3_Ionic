"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModulosPageRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modulos_page_1 = require("./modulos.page");
var routes = [
    {
        path: '',
        component: modulos_page_1.ModulosPage,
        children: [
            {
                path: 'dam1',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../dam1/dam1.module'); }).then(function (m) { return m.Dam1PageModule; }); }
            },
            {
                path: 'dam2',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../dam2/dam2.module'); }).then(function (m) { return m.Dam2PageModule; }); }
            },
            {
                path: 'fct',
                loadChildren: function () { return Promise.resolve().then(function () { return require('../fct/fct.module'); }).then(function (m) { return m.FctPageModule; }); }
            },
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            }
        ]
    }
];
var ModulosPageRoutingModule = /** @class */ (function () {
    function ModulosPageRoutingModule() {
    }
    ModulosPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ModulosPageRoutingModule);
    return ModulosPageRoutingModule;
}());
exports.ModulosPageRoutingModule = ModulosPageRoutingModule;
