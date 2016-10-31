/**
 * Created by Administrator on 2016/10/31.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyIndexLogoComponent = (function () {
    function MyIndexLogoComponent() {
    }
    MyIndexLogoComponent = __decorate([
        core_1.Component({
            selector: 'my-index-logo',
            template: "<div class=\"logo\">\n    <div class=\"warrper\" style=\"overflow:hidden\">\n      <span class=\"col-md-3 ta-left logo\"><img src=\"images/logo.png\" alt=\"\u6469\u5B9D\u7F51logo\"></span>\n      <ul class=\"nav_top fr ta-right\">\n        <li><a href=\"#\">\u7F8E\u98DF</a></li>\n        <li><a href=\"#\">\u7535\u5F71</a></li>\n        <li><a href=\"#\">\u4F11\u95F2\u5A31\u4E50</a></li>\n        <li><a href=\"#\">\u8D2D\u7269</a></li>\n        <li><a href=\"#\">\u751F\u6D3B\u670D\u52A1</a></li>\n        <li><a href=\"#\">\u9152\u5E97</a></li>\n        <li><a href=\"#\">\u4E3D\u4EBA</a></li>\n        <li><a href=\"#\">\u5468\u8FB9\u6E38</a></li>\n      </ul>\n      <div class=\"search fr\">\n        <i class=\"fl glyphicon glyphicon-remove\" id=\"close_search\"></i>\n        <input type=\"search fl\" placeholder=\"\u8BF7\u8F93\u5165\u60A8\u60F3\u641C\u7D22\u7684\u5173\u952E\u8BCD\">\n        <i class=\"fr glyphicon glyphicon-search\"></i>\n      </div>\n    </div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyIndexLogoComponent);
    return MyIndexLogoComponent;
}());
exports.MyIndexLogoComponent = MyIndexLogoComponent;
//# sourceMappingURL=my-index-logo.component.js.map