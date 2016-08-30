import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:  'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {

    }
    ngOnInit() {
        this.heroService.getHeroes().then(heroes => {
            console.log('Heroes from HeroService:', heroes);
            this.heroes = heroes
        })
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}