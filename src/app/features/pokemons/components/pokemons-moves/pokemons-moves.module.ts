import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsMovesComponent } from './pokemons-moves.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { PokemonMoveTableModule } from '../pokemon-move-table/pokemon-move-table.module';

@NgModule({
  declarations: [PokemonsMovesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    PokemonMoveTableModule,
  ],
  exports: [PokemonsMovesComponent],
})
export class PokemonsMovesModule {}
