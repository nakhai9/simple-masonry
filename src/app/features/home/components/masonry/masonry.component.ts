import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';

import { MasonryData } from '../../model/model';

@Component({
  selector: 'app-masonry',
  standalone: true,
  imports: [],
  templateUrl: './masonry.component.html',
})
export class MasonryComponent implements OnChanges {
  @Input() columns = 2; // Default is 2
  @Input() spacing = 16; // Unit: px
  @Input() data: MasonryData[] = [];

  masonryData: Array<MasonryData[]> = [];

  ngOnChanges() {
    const masonryData: Array<MasonryData[]> = Array.from(
      { length: this.columns },
      () => []
    );
    this.data.forEach((item, index) => {
      masonryData[index % this.columns].push(item);
    });
    this.masonryData = masonryData;
  }
}
