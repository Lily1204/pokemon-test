import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsCatalogPageComponent } from './pokemons-catalog.component';

describe('PokemonsCatalogPageComponent', () => {
  let component: PokemonsCatalogPageComponent;
  let fixture: ComponentFixture<PokemonsCatalogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsCatalogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
