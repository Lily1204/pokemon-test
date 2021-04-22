import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  getCatalog,
  getCatalogError,
  getCatalogSuccess,
} from '../../actions/catalog/get-catalog.actions';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Injectable()
export class GetCatalogEffects {
  getCatalogE$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCatalog),
      switchMap(({ payload }) =>
        this.pokemonService.getPokemon(payload).pipe(
          map((response) => getCatalogSuccess({ payload: response })),
          catchError((error) => of(getCatalogError({ error: error.error })))
        )
      )
    );
  });

  deleteCoffemakerError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getCatalogError),
        tap(() => {
          this.snackbar.open('Ha ocurrido un error al cargar los datos', null, {
            panelClass: 'error',
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private snackbar: MatSnackBar
  ) {}
}
