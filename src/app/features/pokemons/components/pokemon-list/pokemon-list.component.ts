import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Catalog } from 'src/app/shared/models/catalog';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() catalog: Catalog;

  @Input() items: any;

  @Output() pageEventBefore: EventEmitter<string> = new EventEmitter();

  @Output() pageEventAfter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  
  onChangePageBefore() {
    this.pageEventBefore.emit(this.catalog.previous);
    console.log(this.catalog.previous);
  }
  onChangePageAfter() {
    this.pageEventAfter.emit(this.catalog.next);
    console.log(this.catalog.next);
  }
}
