/**
 * Created by Administrator on 2016/10/31.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'my-footer',
    template: `<div class="footer">
    <div class="warrper">
        <dl class="fl">
      <dt>购物指南</dt>
      <dd><a href="#">购物流程</a></dd>
      <dd><a href="#">联系客服</a></dd>
      <dd><a href="#">免费注册</a></dd>
    </dl>
    <dl class="fl">
      <dt>了解我们</dt>
      <dd><a href="#">招商合作</a></dd>
      <dd><a href="#">联系我们</a></dd>
      <dd><a href="#">企业简介</a></dd>
    </dl>
    <dl class="fl">
      <dt>商家服务</dt>
      <dd><a href="#">商家帮助</a></dd>
      <dd><a href="#">摩宝规则</a></dd>
      <dd><a href="#">商家入驻</a></dd>
      <dd><a href="#">行业标准</a></dd>
    </dl>
    <dl class="fl">
      <dt>支付方式</dt>
      <dd><a href="#">摩宝支付</a></dd>
      <dd><a href="#">积分规则</a></dd>
    </dl>
    <ul class="contact fl">
      <li>
        <i class="footer_icon tel"></i>
        <span>服务热线：<br/>
        <font>xxx-xxx-xxx</font></span>
      </li>
      <li>
        <i class="footer_icon time"></i>
        <span>服务时间：<br/>
        <font>周一至五  9:00-17:00</font>
        </span>
      </li>
      <li>
        <i class="footer_icon add"></i>
        <span>总部地址：<br/>
        <font>广东省东莞市松山湖国际金融创业园中汇世银大厦</font></span>
      </li>
    </ul>
    <div class="qrcode fl" style="margin-top:25px"><img src="images/qrcode.png"></div>
    <div class="qrcode fr" style="margin-top:25px"><img src="images/qrcode.png"></div>
    </div>
  </div>
  <div class="copyright">
    <div class="warrper">
      <p>版权所有：深圳市前海摩根数字科技有限公司 联系电话：xxx-xxxx-xxx
        <br/> 备案号：粤icp备XXXXXXX号-1 电信增值业务许可证：粤ICP证XXXXXX号 粤公网安备 XXXXXXXXXXXXXX号</p>
    </div>
  </div>
  <div class="Telescopic">
    <div class="float_nav">
      <a href="javascript:;" id="1_floor">1F<span>服饰</span></a>
      <a href="javascript:;" id="2_floor">2F<span>服饰</span></a>
      <a href="javascript:;" id="3_floor">3F<span>服饰</span></a>
      <a href="javascript:;" id="4_floor">4F<span>服饰</span></a>
      <a href="javascript:;" id="5_floor">5F<span>服饰</span></a>
      <a href="javascript:;" id="6_floor">6F<span>服饰</span></a>
      <a href="javascript:;" class="return_top">Top<span>顶部</span></a>
    </div>
  </div>`
})
export class MyFooterComponent {

}