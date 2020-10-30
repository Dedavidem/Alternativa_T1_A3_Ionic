"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var angular_1 = require("@ionic/angular");
var datos_personales_page_1 = require("./datos-personales.page");
describe('DatosPersonalesPage', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [datos_personales_page_1.DatosPersonalesPage],
            imports: [angular_1.IonicModule.forRoot()]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(datos_personales_page_1.DatosPersonalesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
