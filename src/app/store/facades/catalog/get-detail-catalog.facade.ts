import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectDetailCatalogs,
  selectLoading,
} from '../../selectors/catalog/get-detail-catalog.selector';
import { getDetailCatalog } from '../../actions/catalog/get-detail-catalog.actions';

@Injectable({
  providedIn: 'root',
})
export class GetDetailCatalogFacade {
  detail$: Observable<any> = this.store.pipe(select(selectDetailCatalogs));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  constructor(private store: Store) {}

  getDetail(id) {
    this.store.dispatch(getDetailCatalog({ id }));
  }
}
