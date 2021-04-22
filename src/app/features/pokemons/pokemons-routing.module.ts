import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutPokemonModule } from './layout/layout.module';
import { PokemonsCatalogPageComponent } from './pages/pokemons-catalog/pokemons-catalog.component';
import { PokemonsCatalogPageModule } from './pages/pokemons-catalog/pokemons-catalog.module';
import { PokemonsDetailPage } from './pages/pokemons-detail/pokemons-detail.component';
import { PokemonsDetailModule } from './pages/pokemons-detail/pokemons-detail.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PokemonsCatalogPageComponent,
      },
      {
        path: 'detail/:id',
        component: PokemonsDetailPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LayoutPokemonModule,
    PokemonsCatalogPageModule,
    PokemonsDetailModule,
  ],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
