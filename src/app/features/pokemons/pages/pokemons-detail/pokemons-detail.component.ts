import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetDetailCatalogFacade } from '../../../../store/facades/catalog/get-detail-catalog.facade';
import { GetSpeciesFacade } from '../../../../store/facades/catalog/get-species.facade';

@Component({
  selector: 'pokemons-detail',
  templateUrl: './pokemons-detail.component.html',
  styleUrls: ['./pokemons-detail.component.scss'],
})
export class PokemonsDetailPage implements OnInit {
  id: number;

  detail$: Observable<any> = this.getDetailCatalogFacade.detail$;

  species$: Observable<any> = this.getSpeciesFacade.species$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getDetailCatalogFacade: GetDetailCatalogFacade,
    private getSpeciesFacade: GetSpeciesFacade
  ) {}

  ngOnInit(): void {
    const detailId$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => parseInt(paramMap.get('id')))
    );
    detailId$.subscribe((response) => {
      this.id = response;
      console.log(this.id);

      this.getDetailCatalogFacade.getDetail(this.id);
      this.getSpeciesFacade.getSpecies(this.id);
    });
  }
}
