import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: any;
  articleIndex: number | undefined;
  articleContent: string | undefined;
  articleDescription: string | undefined;
  articleUrl: string | undefined;
  activatedRoute: ActivatedRoute | any;
  newsService: NewsService | any;

  constructor(newsService: NewsService, activatedRoute: ActivatedRoute) {
    this.newsService = newsService;
    this.activatedRoute = activatedRoute;
  } // Inject activatedRoute and newsService

  async ngOnInit() {
    this.articleIndex = this.activatedRoute.snapshot.paramMap.get('index');
    console.log('INDEX:' + this.articleIndex);

    try {
      this.article = await this.newsService.getArticle(this.articleIndex);
      this.articleUrl = await this.newsService.getArticleUrl(this.articleIndex);
      this.articleContent = this.article.content;
      this.articleDescription = this.article.description;
      console.log('ARTICLE:' + this.article.title);
    } catch (error) {
      console.error('Error retrieving article:', error);
    }
  }
}
