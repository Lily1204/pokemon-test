import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsAboutComponent } from './pokemons-about.component';

describe('PokemonsAboutComponent', () => {
  let component: PokemonsAboutComponent;
  let fixture: ComponentFixture<PokemonsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
