import {
  Component,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-pinterest-layout',
  standalone: true,
  imports: [ButtonModule, TooltipModule],
  templateUrl: './pinterest-layout.component.html',
})
export class PinterestLayoutComponent {
  private _router = inject(Router);

  handleClick(path: string) {
    if (!path) return;
    this._router.navigateByUrl(`/${path}`);
  }
}
