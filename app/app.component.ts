
import { Component } from '@angular/core';
export class Hero {
    id: number;
    name: string;
}
@Component({
    selector: 'my-app',
    templateUrl: './main-index.component.html'

})
export class AppComponent {
    /*name: string = 'Miccy';
    firstName: string = 'Ma';
    firstNamePlaceholder: string = 'unknown';
    dosomething($event) {
        console.log($event);
    }*/
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'windstrom'
    };
}