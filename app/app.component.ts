/**
 * Created by Administrator on 2016/10/10.
 */
import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'my-app',
    template: `<my-header></my-header>
               <my-index-logo></my-index-logo>
               <main-index></main-index>
               <my-footer></my-footer>
                `

})
export class AppComponent {

}