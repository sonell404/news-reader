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

  // Method to get index of article in array
  getArticleIndex(article: any) {
    return this.headlinesResult.indexOf(article);
  } 
  // Method to open article page and pass index of article
  openArticlePage(article: any) {
    const index = this.getArticleIndex(article);
    this.router.navigate(['/article', { index: index }]);
  }
}
