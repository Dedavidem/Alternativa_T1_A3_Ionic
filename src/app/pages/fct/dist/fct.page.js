"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FctPage = void 0;
var core_1 = require("@angular/core");
var FctPage = /** @class */ (function () {
    function FctPage() {
        this.customAlertOptions = {
            header: 'Ejemplo adición - frutas',
            subHeader: 'Elige a tu gusto',
            message: '1€ por cada una',
            translucent: true
        };
        this.customPopoverOptions = {
            header: 'Asignaturas 2º DAM',
            subHeader: 'Elige una asignatura',
            message: 'Sólo podrás elegir la que más te guste'
        };
        this.customActionSheetOptions = {
            header: 'Colores',
            subHeader: 'Selecciona tu color favorito'
        };
        this.text = 'Volver a inicio';
        this.icon = 'arrow-undo';
    }
    FctPage.prototype.abrirInfo = function () {
        window.open('https://www.educantabria.es/formacion-en-centros-de-trabajo/que-es-la-fct.html#:~:text=La%20Formaci%C3%B3n%20en%20Centros%20de,medio%20como%20de%20grado%20superior.');
    };
    FctPage.prototype.abrirInform = function () {
        window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/informatica-comunicaciones.html');
    };
    FctPage.prototype.abrirSanidad = function () {
        window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/sanidad.html');
    };
    FctPage.prototype.abrirAlimento = function () {
        window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/industrias-alimentarias.html');
    };
    FctPage.prototype.abrirServicios = function () {
        window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/servicios-socioculturales-comunidad.html');
    };
    FctPage.prototype.abrirHotel = function () {
        window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/hosteleria-turismo.html');
    };
    FctPage.prototype.abrirElectricidad = function () {
        window.open('https://www.todofp.es/que-como-y-donde-estudiar/que-estudiar/familia/loe/electricidad-electronica.html');
    };
    FctPage.prototype.abrirPlayStation = function () {
        window.open('https://www.playstation.com/es-es/');
    };
    FctPage.prototype.abrirXbox = function () {
        window.open('https://www.xbox.com/es-ES');
    };
    FctPage.prototype.abrirSteam = function () {
        window.open('https://store.steampowered.com/?l=spanish');
    };
    FctPage.prototype.ngOnInit = function () {
    };
    FctPage = __decorate([
        core_1.Component({
            selector: 'app-fct',
            templateUrl: './fct.page.html',
            styleUrls: ['./fct.page.scss']
        })
    ], FctPage);
    return FctPage;
}());
exports.FctPage = FctPage;
