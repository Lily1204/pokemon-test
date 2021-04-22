import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetailPage } from './pokemons-detail.component';

describe('PokemonsDetailPage', () => {
  let component: PokemonsDetailPage;
  let fixture: ComponentFixture<PokemonsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsDetailPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
