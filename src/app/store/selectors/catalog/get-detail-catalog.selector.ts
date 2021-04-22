import { createSelector } from '@ngrx/store';
import { selectCatalog } from './index';

const selectDetailCatalogState = createSelector(
  selectCatalog,
  (state) => state.getDetailCatalogList
);

export const selectLoading = createSelector(
  selectDetailCatalogState,
  (state) => state.loading
);

export const selectDetailCatalogs = createSelector(
  selectDetailCatalogState,
  (state) => (state ? state.data : null)
);
