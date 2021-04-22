import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemons-moves',
  templateUrl: './pokemons-moves.component.html',
  styleUrls: ['./pokemons-moves.component.scss'],
})
export class PokemonsMovesComponent implements OnInit {
  @Input() detail: any;
  constructor() {}

  ngOnInit(): void {}
}
