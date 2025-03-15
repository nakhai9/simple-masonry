import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MasonryData } from '../../model/model';

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './masonry.component.html',
})
export class MasonryComponent {
  @Input() columns = 2; // Default is 2
  @Input() spacing = 16; // Unit: px
  @Input() data: MasonryData[] = [];
}
