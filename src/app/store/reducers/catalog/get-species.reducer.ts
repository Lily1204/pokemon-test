import { mutableOn } from 'ngrx-etc';
import { Action, createReducer } from '@ngrx/store';

import {
  getSpecies,
  getSpeciesError,
  getSpeciesSuccess,
} from '../../actions/catalog/get-species.actions';

export const key = 'getSpecies';

export type State = {
  loading: boolean;
  data: any;
  error: any;
};

const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

export function reducer(originalState: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(getSpecies, (state) => {
      state.error = null;
      state.loading = true;
    }),
    mutableOn(getSpeciesSuccess, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    }),
    mutableOn(getSpeciesError, (state, { error }) => {
      state.error = error;
      state.loading = false;
    })
  )(originalState, action);
}
