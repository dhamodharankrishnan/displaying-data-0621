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
    <img [src]="itemImageUrl2" width="300" height="200">
    <div class="special">Plain old HTML</div>
    <img src="assets/ComputerChair.png" width="50" height="50">
    <button id="saveButton" [disabled]="isUnchanged">Save</button>
    <button id="toggleButton" (click)="toggleSaveButton()">Toggle Save</button>
    `
})
export class AppComponent {
  itemImageUrl2: string;
  title: string;
  myHero: Hero;
  heroes = [
    new Hero(1, 'Windstorm', 2247039966),
    new Hero(13, 'Bombasto', 1234567890),
    new Hero(15, 'Magneta', 939783498)
  ];
  isUnchanged: boolean;
filteredHeroes = [];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
    this.itemImageUrl2 = '../assets/ComputerChair.png';
    this.isUnchanged = false;
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

  toggleSaveButton(){
    this.isUnchanged = !this.isUnchanged;
  }
}

