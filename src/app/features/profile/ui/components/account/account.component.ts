import {
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

import { ProfileStore } from '../../../store/profile.store';

@Component({
  selector: 'app-account',
  imports: [InputTextModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './account.component.html',
})
export class AccountComponent {
  private _store = inject(ProfileStore);
  private _formBuilder = inject(FormBuilder);

  readonly profile$ = this._store.profile$;
  formGroup!: FormGroup;

  ngOnInit() {
    this._initForm();
    if (this.formGroup) {
      this._patchValues();
      this._setupFormListeners();
    }
  }

  private _initForm() {
    this.formGroup = this._formBuilder.group({
      email: [null, [Validators.email]],
      phone: [null],
    });
  }

  private _patchValues() {
    if (this.formGroup) {
      this.profile$.pipe(distinctUntilChanged()).subscribe({
        next: (profile) => {
          this.formGroup.patchValue(
            {
              email: profile.email || null,
              phone: profile.phone || null,
            },
            {
              emitEvent: false,
            }
          );
        },
      });
    }
  }

  private _setupFormListeners() {
    this.formGroup.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this._store.updateProfileProperty({
          email: value.email,
          phone: value.phone,
        });
      });
  }
}
