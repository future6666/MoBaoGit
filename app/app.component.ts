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
                <router-outlet></router-outlet>
                <my-footer></my-footer>
                `

})
export class AppComponent {

}