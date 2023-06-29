import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ModalController, IonContent } from '@ionic/angular';
import { HeadlineModalComponent } from '../../components/headline-modal-component/headline-modal-component.component';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  headlines: Observable<any> | undefined;
  articles: any;

  constructor(
    private newsService: NewsService,
    private router: Router,
    private modalController: ModalController
  ) {}

  headlinesResult: any = [];
  isCardOpen: boolean = false;
  selectedHeadline: any;

  ngOnInit() {
    this.newsService.getHeadlines().subscribe((data) => {
      console.log(data);
      this.headlinesResult = data.articles;
    });
  }

  openCard(headline: any) {
    this.selectedHeadline = headline;
    this.isCardOpen = true;
  }

  closeCard() {
    this.isCardOpen = false;
  }  
}
