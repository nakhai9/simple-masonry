import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { ProfileStore } from '../../../store/profile.store';

@Component({
  selector: 'app-authentication',
  imports: [
    ToggleSwitchModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
  standalone: true,
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AuthenticationComponent implements OnInit {
  private _store = inject(ProfileStore);
  private _formBuilder = inject(FormBuilder);

  readonly profile$ = this._store.profile$;
  formGroup!: FormGroup;

  ngOnInit() {
    this._initForm();
    if (this.formGroup) {
      this._patchValues();
      this._setupFormListener();
    }
  }

  private _initForm() {
    this.formGroup = this._formBuilder.group({
      password: [null],
      is2Factor: [false],
    });
  }

  private _patchValues() {
    if (this.formGroup) {
      this.profile$.pipe(distinctUntilChanged()).subscribe({
        next: (profile) => {
          this.formGroup.patchValue(
            {
              password: profile.password || null,
              is2Factor: profile.is2Factor || false,
            },
            {
              emitEvent: false,
            }
          );
        },
      });
    }
  }

  private _setupFormListener() {
    this.formGroup.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this._store.updateProfileProperty({
          password: value.password,
          is2Factor: value.is2Factor,
        });
      });
  }
}
