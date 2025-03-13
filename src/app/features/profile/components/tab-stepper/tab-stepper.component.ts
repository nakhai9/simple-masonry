import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TabStepper } from '../../models/stepper.model';

@Component({
  selector: 'app-tab-stepper',
  imports: [],
  templateUrl: './tab-stepper.component.html',
  styleUrl: './tab-stepper.component.scss',
  standalone: true,
})
export class TabStepperComponent {
  @Input() stepList: TabStepper[] = [];
  @Input() currentStep!: TabStepper;

  @Output() onChange = new EventEmitter();

  handleClickStep(step: TabStepper) {
    this.onChange.emit(step);
  }
}
