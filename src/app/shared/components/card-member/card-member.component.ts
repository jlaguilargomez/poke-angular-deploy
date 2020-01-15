import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-member',
	templateUrl: './card-member.component.html',
	styleUrls: ['./card-member.component.scss'],
})
export class CardMemberComponent implements OnInit {
	@Input() name: string;
	@Input() job: string;
	@Input() img: string;
	constructor() {}

	ngOnInit() {}
}
