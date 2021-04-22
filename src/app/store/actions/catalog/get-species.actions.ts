import { createAction, props } from '@ngrx/store';

export const getSpecies = createAction(
  '[CATALOG] Get Species',
  props<{ id }>()
);
export const getSpeciesSuccess = createAction(
  '[CATALOG] Get Species Success',
  props<{ payload: any }>()
);

export const getSpeciesError = createAction(
  '[CATALOG] Get Species Error',
  props<{ error: any }>()
);
