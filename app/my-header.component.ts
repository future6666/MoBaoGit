import {Component} from '@angular/core';

@Component({
    selector: 'my-header',
    template: `<div class="top">
    <div class="warrper">
      <span class="fl col-md-2">您所在的位置：<div class="btn-group">
      <a class="dropdown-toggle" data-toggle="dropdown">东莞<span class="caret"></span></a>
      <ul class="dropdown-menu location" role="menu">
        <li><a href="javascript:(0)" class="on">北京</a></li>
        <li><a href="javascript:(0)">上海</a></li>
        <li><a href="javascript:(0)">天津</a></li>
        <li><a href="javascript:(0)">重庆</a></li>
        <li><a href="javascript:(0)">河北</a></li>
        <li><a href="javascript:(0)">山西</a></li>
        <li><a href="javascript:(0)">河南</a></li>
        <li><a href="javascript:(0)">辽宁</a></li>
        <li><a href="javascript:(0)">吉林</a></li>
        <li><a href="javascript:(0)">黑龙</a></li>
        <li><a href="javascript:(0)">江内</a></li>
        <li><a href="javascript:(0)">蒙古</a></li>
        <li><a href="javascript:(0)">江苏</a></li>
        <li><a href="javascript:(0)">山东</a></li>
        <li><a href="javascript:(0)">安徽</a></li>
        <li><a href="javascript:(0)">浙江</a></li>
        <li><a href="javascript:(0)">福建</a></li>
        <li><a href="javascript:(0)">湖北</a></li>
        <li><a href="javascript:(0)">湖南</a></li>
        <li><a href="javascript:(0)">广东</a></li>
        <li><a href="javascript:(0)">广西</a></li>
        <li><a href="javascript:(0)">江西</a></li>
        <li><a href="javascript:(0)">四川</a></li>
        <li><a href="javascript:(0)">海南</a></li>
        <li><a href="javascript:(0)">贵州</a></li>
        <li><a href="javascript:(0)">云南</a></li>
        <li><a href="javascript:(0)">西藏</a></li>
        <li><a href="javascript:(0)">陕西</a></li>
        <li><a href="javascript:(0)">甘肃</a></li>
        <li><a href="javascript:(0)">青海</a></li>
        <li><a href="javascript:(0)">宁夏</a></li>
        <li><a href="javascript:(0)">新疆</a></li>
        <li><a href="javascript:(0)">台湾</a></li>
        <li><a href="javascript:(0)">香港</a></li>
        <li><a href="javascript:(0)">澳门</a></li>
        <li><a href="javascript:(0)">钓鱼</a></li>
        <li><a href="javascript:(0)">岛海外</a></li>
      </ul>
    </div>
    </span>
    <span class="btn-group col-md-2">
    <a class="dropdown-toggle" data-toggle="dropdown">微信公众号<span class="caret"></span></a>
    <div class="dropdown-menu ta-mid" role="menu">
      <img src="../images/qrcode.png" alt="" class="qrcode">
    </div>
    </span>
    <span class="fr col-md-5">
      <a href="#" class="favourite col-md-3 ta-mid"><i class="glyphicon glyphicon-heart" style="margin-right:5px"></i>我的收藏</a>
      <a href="#" class="my-order col-md-3 ta-mid"><i class="glyphicon glyphicon-list-alt" style="margin-right:5px"></i>我的订单</a>
      <a href="#" class="login col-md-2 ta-mid"><i class="glyphicon glyphicon-user" style="margin-right:5px"></i>登录</a>
      <a href="#" class="reg col-md-2 ta-mid"><i class="glyphicon glyphicon-edit" style="margin-right:5px"></i>注册</a>
      <a href="#" class="favourite col-md-2 ta-mid" id="search"><i class="glyphicon glyphicon-search" style="margin-right:5px"></i>搜索</a>
    </span>
  </div>
  </div>`
})
export class MyHeaderComponent {

}