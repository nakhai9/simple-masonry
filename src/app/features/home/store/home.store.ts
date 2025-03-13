import { inject, Injectable } from '@angular/core';

import { finalize } from 'rxjs';

import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';

import { UnunsplashImageModel } from '../model/model';
import { UnsplashService } from '../service/unsplash.service';

export const initialState = {
  list: [] as UnunsplashImageModel[],
  isLoading: false as boolean,
};

type State = typeof initialState;

@Injectable()
export class HomeStore extends ComponentStore<State> {
  private _service = inject(UnsplashService);

  constructor() {
    super(initialState);
  }

  readonly vm$ = this.select((state) => state);

  loadImages() {
    this.patchState({ isLoading: true });
    this._service
      .getAll()
      .pipe(
        tapResponse({
          next: (response) => {
            this.patchState({
              list: response,
            });
          },
          error: (error) => console.log(error),
        }),
        finalize(() => {
          this.patchState({ isLoading: false });
        })
      )
      .subscribe();
  }
}
