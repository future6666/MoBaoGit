import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';//为了让表单输入支持双向数据绑定，要导入FormsModule模块



import { AppComponent }   from './app.component';
import { MyHeaderComponent } from './my-header.component';
import { MyFooterComponent } from './my-footer.component';
import { MyIndexLogoComponent} from './my-index-logo.component';
import { MainIndexComponent} from './main/main-index.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MyHeaderComponent,
        MyFooterComponent,
        MyIndexLogoComponent,
        MainIndexComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }