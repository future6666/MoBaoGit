/**
 * Created by Administrator on 2016/10/10.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';//为了让表单输入支持双向数据绑定，要导入FormsModule模块
import { AppComponent }   from './app.component';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }