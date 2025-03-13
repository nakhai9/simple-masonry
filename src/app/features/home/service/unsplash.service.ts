import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environment/environment';
import { UnunsplashImageModel } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  BASE_URL = 'https://api.unsplash.com/photos';

  private _http = inject(HttpClient);

  getAll(): Observable<UnunsplashImageModel[]> {
    return this._http.get<UnunsplashImageModel[]>(this.BASE_URL, {
      params: {
        client_id: environment.unsplashAccessKey || '',
        perPage: 12,
        page: 1,
      },
    });
  }
}
