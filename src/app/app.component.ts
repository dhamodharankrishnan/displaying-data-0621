import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        Name : {{ hero.name }}
         Phone : {{ hero.phoneNumber }}
      </li>
    </ul>
    `
})
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes = [
    new Hero(1, 'Windstorm', 2247039966),
    new Hero(13, 'Bombasto', 1234567890),
    new Hero(15, 'Magneta', 939783498),
    new Hero(20, 'Tornado', 298472394)
  ];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }
}
