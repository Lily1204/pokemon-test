import { createSelector } from '@ngrx/store';
import { selectCatalog } from './index';

const selectSpeciesState = createSelector(
  selectCatalog,
  (state) => state.getSpecies
);

export const selectLoading = createSelector(
  selectSpeciesState,
  (state) => state.loading
);

export const selectSpecies = createSelector(
  selectSpeciesState,
  (state) => (state ? state.data : null)
);
