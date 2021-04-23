import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_EFFECTS } from './effects';
import { ROOT_REDUCERS } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      name: 'Pokemon',
    }),
    EffectsModule.forRoot(ROOT_EFFECTS),
  ],
})
export class StoreConfigModule {}
