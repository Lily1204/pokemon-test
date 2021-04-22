import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsAboutComponent } from './pokemons-about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PokemonsAboutComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule ],
  exports: [PokemonsAboutComponent],
})
export class PokemonsAboutModule {}
