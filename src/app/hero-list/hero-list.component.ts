import { HeroService } from '../hero.service';
import { Hero } from '../Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  isSelected(h: Hero): boolean {
    return h === this.selectedHero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

}
