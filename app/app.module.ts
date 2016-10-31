import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';//为了让表单输入支持双向数据绑定，要导入FormsModule模块

import { routing } from './app.routing';


import { AppComponent }   from './app.component';
import { MyHeaderComponent } from './my-header.component';
import { MyFooterComponent } from './my-footer.component';
import { CenterComponent } from './center/center.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        MyHeaderComponent,
        MyFooterComponent,
        CenterComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }