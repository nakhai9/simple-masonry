import { inject, Injectable } from '@angular/core';

import { tap } from 'rxjs';

import { ComponentStore } from '@ngrx/component-store';

import { Profile } from '../models/models';
import { TabStepper } from '../models/stepper.model';
import { ApiService } from '../services/api.service';

export const initialState = {
  currentStep: {
    title: 'Public Profile',
    key: 'profile',
    status: 'init',
    order: 1,
    isHide: false,
  } as TabStepper,
  stepper: [
    {
      title: 'Public Profile',
      key: 'profile',
      status: 'init',
      order: 1,
      isHide: false,
    },
    {
      title: 'Account management',
      key: 'account',
      status: 'init',
      order: 2,
      isHide: false,
    },
    {
      title: 'Authentication',
      key: 'authentication',
      status: 'init',
      order: 3,
      isHide: false,
    },
    // {
    //   title: 'Appearance',
    //   key: 'appearance',
    //   status: 'init',
    //   order: 4,
    //   isHide: false,
    // },
  ] as TabStepper[],
  profile: {} as Profile,
  isLoading: false as boolean,
};

type State = typeof initialState;

@Injectable()
export class ProfileStore extends ComponentStore<State> {
  private _service = inject(ApiService);

  constructor() {
    super(initialState);
  }

  readonly vm$ = this.select((state) => state);
  readonly profile$ = this.select((state) => state.profile);

  get snapshotProfile() {
    return this.get((state) => state.profile);
  }

  updateCurrentStep(step: TabStepper) {
    this.patchState({
      currentStep: step,
    });
  }

  loadData(id: number) {
    this._service
      .get(id)
      .pipe(
        tap({
          next: (data) => {
            this.patchState({
              profile: data,
            });
          },
        })
      )
      .subscribe();
  }

  updateProfileProperty(profile: Partial<Profile>) {
    this.patchState((state) => ({
      profile: {
        ...state.profile,
        ...profile,
      },
    }));
  }

  save() {
    // should write a function to validate data before saving
    console.log(this.snapshotProfile);
  }
}
