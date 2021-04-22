import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from '../../../shared/services/pokemon.service';
import {
  getSpecies,
  getSpeciesError,
  getSpeciesSuccess,
} from '../../actions/catalog/get-species.actions';

@Injectable()
export class GetSpeciesEffects {
  getSpecies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getSpecies),
      switchMap(({ id }) =>
        this.pokemonService.getSpecies(id).pipe(
          map((response) => getSpeciesSuccess({ payload: response })),
          catchError((error) => of(getSpeciesError({ error: error.error })))
        )
      )
    );
  });

  getSpeciesError$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getSpeciesError),
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
