import { createFeatureSelector } from '@ngrx/store';
import { key, State } from '../../reducers/catalog';

export const selectCatalog = createFeatureSelector<State>(key);
