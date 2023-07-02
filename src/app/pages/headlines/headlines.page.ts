import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  headlines: Observable<any> | undefined;
  article: Observable<any> | undefined;

  constructor(
    private newsService: NewsService
  ) {}

  headlinesResult: any = [];

  ngOnInit() {
    this.newsService.getHeadlines().subscribe((data) => {
      console.log(data);
      this.headlinesResult = data.articles;
    });
  }

  // Method to open an article
  openArticle(article: any) {
    const newsStream = this.headlinesResult;
    this.newsService.openArticlePage(newsStream, article);
  }
}
