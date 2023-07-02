import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: any; // Holds the article object
  articleIndex: number | undefined; // Holds the index of the article
  articleContent: string | undefined; // Holds the content of the article
  articleDescription: string | undefined; // Holds the description of the article
  articleUrl: string | undefined; // Holds the URL of the article
  activatedRoute: ActivatedRoute | any; // Instance of ActivatedRoute
  newsService: NewsService | any; // Instance of NewsService

  constructor(newsService: NewsService, activatedRoute: ActivatedRoute) {
    this.newsService = newsService;
    this.activatedRoute = activatedRoute;
  } // Inject activatedRoute and newsService

  async ngOnInit() {
    this.articleIndex = this.activatedRoute.snapshot.paramMap.get('index');

    try {
      this.article = await this.newsService.getArticle(this.articleIndex); // Retrieve the article based on the index
      this.articleUrl = await this.newsService.getArticleUrl(this.articleIndex); // Retrieve the article URL based on the index
      this.articleContent = await this.article.content; // Set the article content
      this.articleDescription = await this.article.description; // Set the article description
    } catch (error) {
      console.error('Error retrieving article:', error); // Log an error if there is an issue retrieving the article
    }
  }
}