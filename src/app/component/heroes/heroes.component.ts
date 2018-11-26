import {Component, OnInit} from '@angular/core';
import {Hero} from '../../model/hero';
import {HERO_LIST} from '../../mock/heroes-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  hero: Hero = {
    id: 99,
    name: 'Kiran'
  };
  selectedHero: Hero;


  constructor() {
  }

  ngOnInit(): void {
    this.heroes = HERO_LIST;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
