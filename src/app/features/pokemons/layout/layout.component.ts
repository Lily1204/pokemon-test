import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
/*     this.pokemonService.getPokemon().subscribe((response) => {
      console.log(response);
    }); */
  }
}
