import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <ul>
      <li *ngFor="let hero of heroes">
        Name : {{ hero.name }}
         Phone : {{ hero.phoneNumber }}
      </li>
    </ul>
    <p>The sum of 1 + 1 is {{1 + 1}}.</p>
    <p>The sum of 1 + 1 is {{1 + 1 + getVal()}}.</p>
    <button *ngFor="let hero of heroes" (click)="deleteHero(hero)"> Delete {{hero.name}}</button>
    <ul>
    <p>Filtered heroes </p>
    <li *ngFor="let hero of filteredHeroes">
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
    new Hero(15, 'Magneta', 939783498)
  ];
filteredHeroes = [];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }

  getVal() {
    return 3;
  }

  deleteHero(delHeroObject){
    console.log(' Before filtering ', this.heroes);
    // this.heroes = this.heroes.filter(function(eachHero) {
    //   return eachHero.name !== delHeroObject.name;
    // });

    //
   this.filteredHeroes = this.heroes.filter( function(eachHero){
      console.log(eachHero);
      return eachHero.name !== delHeroObject.name;
    });
    console.log(' After filtering ', this.heroes);

  }
}

