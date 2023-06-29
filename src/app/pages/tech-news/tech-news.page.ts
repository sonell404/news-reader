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

  constructor(private newsService: NewsService, private router: Router) { }

  techNewsResult: any = [];

  ngOnInit() {
    this.newsService.getTechNews().subscribe((data) => {
      console.log(data);
      this.techNewsResult = data.articles;
    });
  }

}
