import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from 'src/app/shared/models/catalog';
import { GetCatalogFacade } from '../../../../store/facades/catalog/get-catalog.facade';
import { PokemonService } from '../../../../shared/services/pokemon.service';

@Component({
  selector: 'pokemons-catalog',
  templateUrl: './pokemons-catalog.component.html',
  styleUrls: ['./pokemons-catalog.component.scss'],
})
export class PokemonsCatalogPageComponent implements OnInit {
  catalog$: Observable<Catalog> = this.getCatalogFacade.catalog$;

  isLoading$: Observable<boolean> = this.getCatalogFacade.isLoading$;

  items = [];

  constructor(
    private getCatalogFacade: GetCatalogFacade,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getCatalogFacade.getCatalog(0, 20);
    this.items = [];
    this.catalog$.subscribe((response) => {
      if (response != null) {
        response.results.forEach((pokemon) => {
          this.pokemonService
            .fetchPokemonData(pokemon.url)
            .subscribe((response: any) => {
              this.items.push(response);
              this.items.sort((a, b) => {
                if (a.id > b.id) {
                  return 1;
                }
                if (a.id < b.id) {
                  return -1;
                }
                return 0;
              });
            });
        });
      }
    });
  }
  pageEventBefore(event) {
    this.items = [];
    let url = event;
    this.getCatalogFacade.getCatalog('', '', url);
  }

  pageEventAfter(event) {
    this.items = [];
    let url = event;
    this.getCatalogFacade.getCatalog('', '', url);
  }
}
