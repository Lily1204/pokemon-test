import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsCatalogPageComponent } from './pokemons-catalog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonListModule } from '../../components/pokemon-list/pokemon-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PokemonsCatalogPageComponent],
  imports: [
    CommonModule,
    PokemonListModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  exports: [PokemonsCatalogPageComponent],
})
export class PokemonsCatalogPageModule {}
