import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemons-routing.module';

@NgModule({
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
