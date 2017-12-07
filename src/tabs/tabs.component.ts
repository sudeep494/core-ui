import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'core-ui-tabs',
	templateUrl: './tabs.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['tabs.component.scss']
})

export class TabsComponent implements OnInit {
	@Input() tabs: any;

	ngOnInit() {

	}
}
