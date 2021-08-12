import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

	favLinks = ['https://www.humanesociety.org/resources/cats-meow', 'https://www.scientificamerican.com/article/cats-recognize-their-own-names-even-if-they-choose-to-ignore-them/'];
	
	constructor() {}

	ngOnInit() {
	}

}
