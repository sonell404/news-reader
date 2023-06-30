import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  headlines: Observable<any> | undefined;
  article: Observable<any> | undefined;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  headlinesResult: any = [];

  ngOnInit() {
    this.newsService.getHeadlines().subscribe((data) => {
      console.log(data);
      this.headlinesResult = data.articles;
    });
  }

  // Method to open article page containing article content
  // openArticle(article: any) {
  //   window.open(article.url, '_blank');
  // }

  // Method to pass to click event which will retrieve article title, content, and URL and pass to article page
  // openArticlePage(article: any) {
  //   this.article = this.newsService.getArticle(article);
  //   this.router.navigate(['/article', article.title]);
  // }

  openArticlePage(article: any) {
    this.router.navigate(['/article', article]);
  } // Pass article title to article page
}
