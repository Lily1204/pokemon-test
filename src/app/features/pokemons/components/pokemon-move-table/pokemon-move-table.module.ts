import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMoveTableComponent } from './pokemon-move-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PokemonMoveTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [PokemonMoveTableComponent],
})
export class PokemonMoveTableModule {}
