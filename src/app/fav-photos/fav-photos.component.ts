import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=MnaVHwPi';
  image2 = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';
  image3 = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg';

  constructor() { }

  ngOnInit() {
  }

}