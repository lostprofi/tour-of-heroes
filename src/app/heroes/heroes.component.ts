import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  constructor() { }
  heroes = HEROES;


  onSelectHero(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
