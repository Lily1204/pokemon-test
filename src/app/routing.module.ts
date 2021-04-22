import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonModule } from './features/pokemons/pokemons.module';
import { UserModule } from './features/user/pages/user/user.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/pokemons/pokemons.module').then(
        (m) => m.PokemonModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/pages/user/user.module').then(
        (m) => m.UserModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PokemonModule, UserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
