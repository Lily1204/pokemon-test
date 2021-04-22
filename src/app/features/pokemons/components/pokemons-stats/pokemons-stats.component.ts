import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemons-stats',
  templateUrl: './pokemons-stats.component.html',
  styleUrls: ['./pokemons-stats.component.scss'],
})
export class PokemonsStatsComponent implements OnInit {
  @Input() detail: any;
  constructor() {}

  ngOnInit(): void {}
}
