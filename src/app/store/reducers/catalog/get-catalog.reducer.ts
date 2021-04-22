import { mutableOn } from 'ngrx-etc';
import { Action, createReducer } from '@ngrx/store';
import {
  getCatalog,
  getCatalogError,
  getCatalogSuccess,
} from '../../actions/catalog/get-catalog.actions';

export const key = 'getCatalogList';

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
    mutableOn(getCatalog, (state) => {
      state.error = null;
      state.loading = true;
    }),
    mutableOn(getCatalogSuccess, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    }),
    mutableOn(getCatalogError, (state, { error }) => {
      state.error = error;
      state.loading = false;
    })
  )(originalState, action);
}
