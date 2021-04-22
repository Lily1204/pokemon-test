import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDetailCatalogFacade } from 'src/app/store/facades/catalog/get-detail-catalog.facade';

@Component({
  selector: 'pokemons-about',
  templateUrl: './pokemons-about.component.html',
  styleUrls: ['./pokemons-about.component.scss'],
})
export class PokemonsAboutComponent implements OnInit {
  @Input() detail: any;

  constructor() {}

  ngOnInit(): void {}
}
