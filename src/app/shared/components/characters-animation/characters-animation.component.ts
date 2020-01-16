import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-characters-animation',
	templateUrl: './characters-animation.component.html',
	styleUrls: ['./characters-animation.component.scss'],
})
export class CharactersAnimationComponent implements OnInit {
	@Input() imgSource: string;
	constructor() {}

	ngOnInit() {}
}
