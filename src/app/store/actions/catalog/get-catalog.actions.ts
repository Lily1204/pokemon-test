import { createAction, props } from '@ngrx/store';
import { Catalog, Page } from '../../../shared/models/catalog';

export const getCatalog = createAction(
  '[CATALOG] Get Catalog',
  props<{ payload: Page }>()
);
export const getCatalogSuccess = createAction(
  '[CATALOG] Get Catalog Success',
  props<{ payload: any }>()
);

export const getCatalogError = createAction(
  '[CATALOG] Get Catalog Error',
  props<{ error: any }>()
);
