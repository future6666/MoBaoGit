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
    /*template: '<h1>My name is {{name}}</h1>' +
    '<input type="text" [value]="name" (input)="name = $event.target.value" [placeholder]="firstNamePlaceholder"/>' +
    '<input type="text" [value]="name" (input)="name = $event.target.value" [placeholder]="firstNamePlaceholder"/>' +
    '<button (click)="dosomething($event)">click me</button> '*/
    template: `<h1>{{title}}</h1>
               <h2>{{hero.name}} details</h2>
               <div>
                <label>id:</label>
                <input type="text" value="{{hero.id}}"/>
               </div>
               <div>
                <label>name:</label>
                <input type="text" [(ngModel)]="hero.name" placeholder="name"/>
               </div>`

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