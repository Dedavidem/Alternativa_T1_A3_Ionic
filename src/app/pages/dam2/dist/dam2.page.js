"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Dam2Page = void 0;
var core_1 = require("@angular/core");
var Dam2Page = /** @class */ (function () {
    function Dam2Page(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.text = 'Volver a inicio';
        this.icon = 'arrow-undo';
        this.elementos = [
            {
                icono: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/data-access-2635734-2183035.png',
                asignatura: 'Acceso a Datos',
                color: 'secondary',
                isChecked: 'true'
            },
            {
                icono: 'https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg',
                asignatura: 'Desarrollo de Interfaces',
                color: 'tertiary',
                isChecked: 'false'
            },
            {
                icono: 'https://icon-library.com/images/services-icon-png/services-icon-png-8.jpg',
                asignatura: 'Programación de Procesos y Servicios',
                color: 'success',
                isChecked: 'true'
            },
            {
                icono: 'https://image.flaticon.com/icons/png/512/1465/1465429.png',
                asignatura: 'Empresa e Iniciativa Emprendedora',
                color: 'warning',
                isChecked: 'true'
            },
            {
                icono: 'https://img2.freepng.es/20180403/diq/kisspng-enterprise-resource-planning-business-accounts-rec-accounting-5ac36ed50d7552.4031156815227573330551.jpg',
                asignatura: 'Sistemas de Gestión Empresarial',
                color: 'danger',
                isChecked: 'false'
            },
            {
                icono: 'https://image.flaticon.com/icons/png/512/186/186239.png',
                asignatura: 'Programación Multimedia y Móviles',
                color: 'dark',
                isChecked: 'true'
            }
        ];
    }
    Dam2Page.prototype.onClick = function (elemento) {
        console.log(elemento);
    };
    Dam2Page.prototype.ngOnInit = function () {
    };
    Dam2Page = __decorate([
        core_1.Component({
            selector: 'app-dam2',
            templateUrl: './dam2.page.html',
            styleUrls: ['./dam2.page.scss']
        })
    ], Dam2Page);
    return Dam2Page;
}());
exports.Dam2Page = Dam2Page;
