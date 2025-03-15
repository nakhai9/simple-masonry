import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { provideComponentStore } from '@ngrx/component-store';

import { MasonryComponent } from './components/masonry/masonry.component';
import { HomeStore } from './store/home.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    CommonModule,
    InputIcon,
    IconField,
    InputTextModule,
    MasonryComponent,
  ],
  templateUrl: './home.component.html',
  providers: [provideComponentStore(HomeStore)],
})
export class HomeComponent implements OnInit {
  private _store = inject(HomeStore);
  readonly vm$ = this._store.vm$;
  ngOnInit() {
    this._store.loadImages();
  }
}
