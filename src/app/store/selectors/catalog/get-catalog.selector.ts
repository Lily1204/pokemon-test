import { createSelector } from '@ngrx/store';
import { selectCatalog } from './index';

const selectCatalogState = createSelector(
  selectCatalog,
  (state) => state.getCatalogList
);

export const selectLoading = createSelector(
  selectCatalogState,
  (state) => state.loading
);

export const selectCatalogs = createSelector(selectCatalogState, (state) =>
  state ? state.data : null
);

