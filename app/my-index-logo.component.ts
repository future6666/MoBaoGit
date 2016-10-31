/**
 * Created by Administrator on 2016/10/31.
 */

import {Component} from '@angular/core';

@Component ({
    selector:'my-index-logo',
    template:`<div class="logo">
    <div class="warrper" style="overflow:hidden">
      <span class="col-md-3 ta-left logo"><img src="images/logo.png" alt="摩宝网logo"></span>
      <ul class="nav_top fr ta-right">
        <li><a href="#">美食</a></li>
        <li><a href="#">电影</a></li>
        <li><a href="#">休闲娱乐</a></li>
        <li><a href="#">购物</a></li>
        <li><a href="#">生活服务</a></li>
        <li><a href="#">酒店</a></li>
        <li><a href="#">丽人</a></li>
        <li><a href="#">周边游</a></li>
      </ul>
      <div class="search fr">
        <i class="fl glyphicon glyphicon-remove" id="close_search"></i>
        <input type="search fl" placeholder="请输入您想搜索的关键词">
        <i class="fr glyphicon glyphicon-search"></i>
      </div>
    </div>
  </div>`
})

export class MyIndexLogoComponent {

}

