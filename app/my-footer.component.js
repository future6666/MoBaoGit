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
var core_1 = require('@angular/core');
var MyFooterComponent = (function () {
    function MyFooterComponent() {
    }
    MyFooterComponent = __decorate([
        core_1.Component({
            selector: 'my-footer',
            template: "<div class=\"footer\">\n    <div class=\"warrper\">\n        <dl class=\"fl\">\n      <dt>\u8D2D\u7269\u6307\u5357</dt>\n      <dd><a href=\"#\">\u8D2D\u7269\u6D41\u7A0B</a></dd>\n      <dd><a href=\"#\">\u8054\u7CFB\u5BA2\u670D</a></dd>\n      <dd><a href=\"#\">\u514D\u8D39\u6CE8\u518C</a></dd>\n    </dl>\n    <dl class=\"fl\">\n      <dt>\u4E86\u89E3\u6211\u4EEC</dt>\n      <dd><a href=\"#\">\u62DB\u5546\u5408\u4F5C</a></dd>\n      <dd><a href=\"#\">\u8054\u7CFB\u6211\u4EEC</a></dd>\n      <dd><a href=\"#\">\u4F01\u4E1A\u7B80\u4ECB</a></dd>\n    </dl>\n    <dl class=\"fl\">\n      <dt>\u5546\u5BB6\u670D\u52A1</dt>\n      <dd><a href=\"#\">\u5546\u5BB6\u5E2E\u52A9</a></dd>\n      <dd><a href=\"#\">\u6469\u5B9D\u89C4\u5219</a></dd>\n      <dd><a href=\"#\">\u5546\u5BB6\u5165\u9A7B</a></dd>\n      <dd><a href=\"#\">\u884C\u4E1A\u6807\u51C6</a></dd>\n    </dl>\n    <dl class=\"fl\">\n      <dt>\u652F\u4ED8\u65B9\u5F0F</dt>\n      <dd><a href=\"#\">\u6469\u5B9D\u652F\u4ED8</a></dd>\n      <dd><a href=\"#\">\u79EF\u5206\u89C4\u5219</a></dd>\n    </dl>\n    <ul class=\"contact fl\">\n      <li>\n        <i class=\"footer_icon tel\"></i>\n        <span>\u670D\u52A1\u70ED\u7EBF\uFF1A<br/>\n        <font>xxx-xxx-xxx</font></span>\n      </li>\n      <li>\n        <i class=\"footer_icon time\"></i>\n        <span>\u670D\u52A1\u65F6\u95F4\uFF1A<br/>\n        <font>\u5468\u4E00\u81F3\u4E94  9:00-17:00</font>\n        </span>\n      </li>\n      <li>\n        <i class=\"footer_icon add\"></i>\n        <span>\u603B\u90E8\u5730\u5740\uFF1A<br/>\n        <font>\u5E7F\u4E1C\u7701\u4E1C\u839E\u5E02\u677E\u5C71\u6E56\u56FD\u9645\u91D1\u878D\u521B\u4E1A\u56ED\u4E2D\u6C47\u4E16\u94F6\u5927\u53A6</font></span>\n      </li>\n    </ul>\n    <div class=\"qrcode fl\" style=\"margin-top:25px\"><img src=\"images/qrcode.png\"></div>\n    <div class=\"qrcode fr\" style=\"margin-top:25px\"><img src=\"images/qrcode.png\"></div>\n    </div>\n  </div>"
        })
    ], MyFooterComponent);
    return MyFooterComponent;
}());
exports.MyFooterComponent = MyFooterComponent;
//# sourceMappingURL=my-footer.component.js.map