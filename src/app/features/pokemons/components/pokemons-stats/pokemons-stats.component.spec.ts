import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsStatsComponent } from './pokemons-stats.component';

describe('PokemonsStatsComponent', () => {
  let component: PokemonsStatsComponent;
  let fixture: ComponentFixture<PokemonsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
