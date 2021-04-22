import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() detail: any;

  @Input() species: any

  constructor() {}

  ngOnInit(): void {}
}
