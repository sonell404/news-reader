import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.page.html',
  styleUrls: ['./business-news.page.scss'],
})
export class BusinessNewsPage implements OnInit {
  businessNews: Observable<any> | undefined;
  businessNewsResult: any = [];
  constructor(private newsService: NewsService, private router: Router) {}
  ngOnInit() {
    // Retrieve tech news from the news service
    this.newsService.getBusinessNews().subscribe((data) => {
      console.log(data);
      this.businessNewsResult = data.articles;
    });
  }
  // Method to open an article
  openArticle(article: any) {
    const newsStream = this.businessNewsResult;
    // Set the news type to 'tech' in the news service
    this.newsService.setNewsType('business');
    // Open the article page using the news service
    this.newsService.openArticlePage(newsStream, article);
  }
}
