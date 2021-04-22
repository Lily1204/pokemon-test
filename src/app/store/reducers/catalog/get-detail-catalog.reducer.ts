import { mutableOn } from 'ngrx-etc';
import { Action, createReducer } from '@ngrx/store';
import {
  getDetailCatalog,
  getDetailCatalogError,
  getDetailCatalogSuccess,
} from '../../actions/catalog/get-detail-catalog.actions';

export const key = 'getDetailCatalogList';

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
    mutableOn(getDetailCatalog, (state) => {
      state.error = null;
      state.loading = true;
    }),
    mutableOn(getDetailCatalogSuccess, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    }),
    mutableOn(getDetailCatalogError, (state, { error }) => {
      state.error = error;
      state.loading = false;
    })
  )(originalState, action);
}
