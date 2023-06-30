import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: any;
  articleTitle: string | null | undefined;
  articleContent: string | undefined;
  articleUrl: string | undefined;
  activatedRoute: ActivatedRoute | any;
  newsService: NewsService | any;

  constructor(newsService: NewsService, activatedRoute: ActivatedRoute) {
    this.newsService = newsService;
    this.activatedRoute = activatedRoute;
  } // Inject activatedRoute and newsService

  ngOnInit() {
    this.articleTitle = this.activatedRoute.snapshot.paramMap.get('title');
    console.log(this.articleTitle);
    this.article = this.newsService.getArticle(this.articleTitle);
    console.log(this.article);
    this.article.subscribe(
      (data: {
        articles: {
          content: string;
          url: string;
        }[];
      }) => {
        if (data && data.articles && data.articles.length > 0) {
          this.articleContent = data.articles[0].content;
          this.articleUrl = data.articles[0].url;
        } else {
          // Handle empty or invalid data
          console.error('Invalid data returned from the API');
        }
      },
      (error: any) => {
        // Handle API call error
        console.error('Error retrieving article:', error);
      }
    );
  }
}
