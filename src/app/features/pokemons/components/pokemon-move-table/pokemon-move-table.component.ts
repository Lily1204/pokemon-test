import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-move-table',
  templateUrl: './pokemon-move-table.component.html',
  styleUrls: ['./pokemon-move-table.component.scss'],
})
export class PokemonMoveTableComponent implements OnInit {
  @Input() dataSource: any;

  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['position', 'name'];
}
