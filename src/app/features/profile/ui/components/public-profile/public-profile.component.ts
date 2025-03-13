import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

import { ProfileStore } from '../../../store/profile.store';

@Component({
  selector: 'app-public-profile',
  imports: [InputTextModule, TextareaModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './public-profile.component.html',
})
export class PublicProfileComponent implements OnInit {
  private _store = inject(ProfileStore);
  private _formBuilder = inject(FormBuilder);

  readonly profile$ = this._store.profile$;
  formGroup!: FormGroup;

  ngOnInit() {
    this._initForm();
    if (this.formGroup) {
      this._setupFormListeners();
      this._patchValues();
    }
  }

  private _initForm() {
    this.formGroup = this._formBuilder.group({
      firstName: [null],
      lastName: [null],
      bio: [null],
    });
  }

  private _patchValues() {
    this.profile$.subscribe({
      next: (profile) => {
        this.formGroup.patchValue(
          {
            firstName: profile.firstName || null,
            lastName: profile.lastName || null,
            bio: profile.bio || null,
          },
          {
            emitEvent: false,
          }
        );
      },
    });
  }

  private _setupFormListeners() {
    this.formGroup.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this._store.updateProfileProperty({
          firstName: value.firstName,
          lastName: value.lastName,
          bio: value.bio,
        });
      });
  }
}
