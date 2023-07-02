import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  headlines: Observable<any> | undefined;
  article: Observable<any> | undefined;
  headlinesResult: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    // Retrieve headlines from the news service
    this.newsService.getHeadlines().subscribe((data) => {
      this.headlinesResult = data.articles;
    });
  }

  // Method to open an article
  openArticle(article: any) {
    const newsStream = this.headlinesResult;
    // Set the news type to 'regular' in the news service
    this.newsService.setNewsType('regular');
    // Open the article page using the news service
    this.newsService.openArticlePage(newsStream, article);
  }
}
