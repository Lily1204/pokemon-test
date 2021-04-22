import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Catalog } from '../../../shared/models/catalog';
import {
  selectCatalogs,
  selectLoading,
} from '../../selectors/catalog/get-catalog.selector';
import { getCatalog } from '../../actions/catalog/get-catalog.actions';

@Injectable({
  providedIn: 'root',
})
export class GetCatalogFacade {
  catalog$: Observable<Catalog> = this.store.pipe(select(selectCatalogs));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  constructor(private store: Store) {}

  getCatalog(offset?, limit?, url?) {
    this.store.dispatch(getCatalog({ payload: { offset, limit, url } }));
  }
}
