"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms'); //为了让表单输入支持双向数据绑定，要导入FormsModule模块
var app_component_1 = require('./app.component');
var my_header_component_1 = require('./my-header.component');
var my_footer_component_1 = require('./my-footer.component');
var my_index_logo_component_1 = require('./my-index-logo.component');
var main_index_component_1 = require('./main/main-index.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                my_header_component_1.MyHeaderComponent,
                my_footer_component_1.MyFooterComponent,
                my_index_logo_component_1.MyIndexLogoComponent,
                main_index_component_1.MainIndexComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map