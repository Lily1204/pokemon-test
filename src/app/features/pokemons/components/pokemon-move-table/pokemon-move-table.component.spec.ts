import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMoveTableComponent } from './pokemon-move-table.component';

describe('PokemonMoveTableComponent', () => {
  let component: PokemonMoveTableComponent;
  let fixture: ComponentFixture<PokemonMoveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMoveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMoveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
