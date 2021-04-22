import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getDetailCatalog } from '../../actions/catalog/get-detail-catalog.actions';
import { getSpecies } from '../../actions/catalog/get-species.actions';
import {
  selectSpecies,
  selectLoading,
} from '../../selectors/catalog/get-species.selectors';

@Injectable({
  providedIn: 'root',
})
export class GetSpeciesFacade {
  species$: Observable<any> = this.store.pipe(select(selectSpecies));

  isLoading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  constructor(private store: Store) {}

  getSpecies(id) {
    this.store.dispatch(getSpecies({ id }));
  }
}
