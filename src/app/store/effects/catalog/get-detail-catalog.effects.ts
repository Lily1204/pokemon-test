import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from '../../../shared/services/pokemon.service';
import {
  getDetailCatalog,
  getDetailCatalogError,
  getDetailCatalogSuccess,
} from '../../actions/catalog/get-detail-catalog.actions';

@Injectable()
export class GetDetailCatalogEffects {
  getDetailCatalog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getDetailCatalog),
      switchMap(({ id }) =>
        this.pokemonService.getDetail(id).pipe(
          map((response) => getDetailCatalogSuccess({ payload: response })),
          catchError((error) =>
            of(getDetailCatalogError({ error: error.error }))
          )
        )
      )
    );
  });

  getDetailCatalogError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getDetailCatalogError),
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
