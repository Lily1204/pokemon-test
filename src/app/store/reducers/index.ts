import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromGetCatalog from './catalog';

export type AppState = {
  [fromGetCatalog.key]: fromGetCatalog.State;
};

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>(
  'Root reducers token',
  {
    factory: () => ({
      [fromGetCatalog.key]: fromGetCatalog.reducer,
    }),
  }
);
