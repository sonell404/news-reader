import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.page.html',
  styleUrls: ['./tech-news.page.scss'],
})
export class TechNewsPage implements OnInit {
  techNews: Observable<any> | undefined;
  techNewsResult: any = [];
  constructor(private newsService: NewsService, private router: Router) {}
  ngOnInit() {
    // Retrieve tech news from the news service
    this.newsService.getTechNews().subscribe((data) => {
      console.log(data);
      this.techNewsResult = data.articles;
    });
  }
  // Method to open an article
  openArticle(article: any) {
    const newsStream = this.techNewsResult;
    // Set the news type to 'tech' in the news service
    this.newsService.setNewsType('tech');
    // Open the article page using the news service
    this.newsService.openArticlePage(newsStream, article);
  }
}
