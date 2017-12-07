import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
	'sample.component.scss'
  ]
})
export class SampleComponent {

  constructor() {
  }

}
