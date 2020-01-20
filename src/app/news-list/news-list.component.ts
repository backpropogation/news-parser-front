import {Component, OnInit} from '@angular/core';
import {News} from './news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  news: News = {
    title: 'trash',
    description: 'description',
    subTitle: 'subtitle'
  };

  constructor() {
  }

  ngOnInit() {

  }

}
