import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroes: Hero[];
  selectedHero: Hero;

  onSelectHero(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroService: selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

ngOnInit(){
    this.getHeroes();
  }

}
