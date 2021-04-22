import { createAction, props } from '@ngrx/store';

export const getDetailCatalog = createAction(
  '[CATALOG] Get Detail Catalog',
  props<{ id }>()
);
export const getDetailCatalogSuccess = createAction(
  '[CATALOG] Get Detail Catalog Success',
  props<{ payload: any }>()
);

export const getDetailCatalogError = createAction(
  '[CATALOG] Get Detail Catalog Error',
  props<{ error: any }>()
);
