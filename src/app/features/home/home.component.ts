import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { provideComponentStore } from '@ngrx/component-store';

import { HomeStore } from './store/home.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProgressSpinnerModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [provideComponentStore(HomeStore)],
})
export class HomeComponent implements OnInit {
  private _store = inject(HomeStore);
  readonly vm$ = this._store.vm$;

  ngOnInit() {
    this._store.loadImages();
  }
}
