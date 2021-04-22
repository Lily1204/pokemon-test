import { combineReducers } from '@ngrx/store';
import * as fromGetCatalog from './get-catalog.reducer';
import * as fromGetDetailCatalog from './get-detail-catalog.reducer';
import * as fromGetSpecies from './get-species.reducer';

export const key = 'catalogs';

export type State = {
  [fromGetCatalog.key]: fromGetCatalog.State;
  [fromGetDetailCatalog.key]: fromGetDetailCatalog.State;
  [fromGetSpecies.key]: fromGetSpecies.State;
};

export const reducer = combineReducers<State>({
  [fromGetCatalog.key]: fromGetCatalog.reducer,
  [fromGetDetailCatalog.key]: fromGetDetailCatalog.reducer,
  [fromGetSpecies.key]: fromGetSpecies.reducer,
});
