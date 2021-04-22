import { GetCatalogEffects } from './get-catalog.effects';
import { GetDetailCatalogEffects } from './get-detail-catalog.effects';
import { GetSpeciesEffects } from './get-species.effects';

export const AuthenticationEffects = [
  GetCatalogEffects,
  GetDetailCatalogEffects,
  GetSpeciesEffects,
];
