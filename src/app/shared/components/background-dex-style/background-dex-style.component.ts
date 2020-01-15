import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-background-dex-style',
	templateUrl: './background-dex-style.component.html',
	styleUrls: ['./background-dex-style.component.scss'],
})
export class BackgroundDexStyleComponent implements OnInit {
	@Input() num: number;
	@Input() text: string;
	constructor() {}

	ngOnInit() {}
}
