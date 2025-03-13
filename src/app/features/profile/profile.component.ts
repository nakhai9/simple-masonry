import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { provideComponentStore } from '@ngrx/component-store';

import { TabStepper } from './models/stepper.model';
import { ComponentsToImport } from './profile.modules';
import { ProfileStore } from './store/profile.store';

@Component({
  selector: 'app-profile',
  imports: [...ComponentsToImport, CommonModule, ButtonModule],
  templateUrl: './profile.component.html',
  standalone: true,
  providers: [provideComponentStore(ProfileStore)],
})
export class ProfileComponent implements OnInit {
  private _store = inject(ProfileStore);
  private _activatedRoute = inject(ActivatedRoute);

  readonly vm$ = this._store.vm$;

  display = false;

  ngOnInit() {
    const id = Number(this._activatedRoute.snapshot.params['id']);
    if (id) {
      this._store.loadData(id);
    }
  }

  stepChanges(step: TabStepper) {
    this._store.updateCurrentStep(step);
  }

  save() {
    this._store.save();
  }
}
