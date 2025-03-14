import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DialogModule } from 'primeng/dialog';

import {
  PinterestLayoutComponent,
} from './core/layout/pinterest-layout/pinterest-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogModule, PinterestLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Simple Masonry';
}
