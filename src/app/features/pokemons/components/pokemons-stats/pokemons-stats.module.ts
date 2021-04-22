import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsStatsComponent } from './pokemons-stats.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [PokemonsStatsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  exports: [PokemonsStatsComponent],
})
export class PokemonsStatsModule {}
