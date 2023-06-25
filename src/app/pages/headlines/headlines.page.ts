import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  news: Observable<News[]> | undefined;
  articles: any;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

  openArticle(url: string) {
    window.open(url, '_blank');
  }
}
