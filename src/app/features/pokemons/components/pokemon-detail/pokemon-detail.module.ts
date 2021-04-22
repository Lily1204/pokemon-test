import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PokemonsAboutModule } from '../pokemons-about/pokemons-about.module';
import { PokemonsMovesModule } from '../pokemons-moves/pokemons-moves.module';
import { PokemonsStatsModule } from '../pokemons-stats/pokemons-stats.module';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTabsModule,
    PokemonsAboutModule,
    PokemonsMovesModule,
    PokemonsStatsModule,
  ],
  exports: [PokemonDetailComponent],
})
export class PokemonDetailModule {}
