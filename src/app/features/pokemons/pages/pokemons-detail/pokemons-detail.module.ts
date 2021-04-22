import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsDetailPage } from './pokemons-detail.component';
import { RouterModule } from '@angular/router';
import { PokemonDetailModule } from '../../components/pokemon-detail/pokemon-detail.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PokemonsDetailPage],
  imports: [
    CommonModule,
    RouterModule,
    PokemonDetailModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [PokemonsDetailPage],
})
export class PokemonsDetailModule {}
