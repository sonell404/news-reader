// Service to fetch news from the API
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private headlinesUrl: string = '';
  private techUrl: string = '';
  private businessUrl: string = '';
  private apiKey: string = '';
  private newsType: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.apiKey = 'a478fa2e8e864f0bb9af9b26bc168b80';
    this.headlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    this.techUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.apiKey}`;
    this.businessUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`;
  }

  // Method to get an article object from the array of articles
  getArticle(index: number): Promise<any> {
    let newsStream: Observable<any>;
    if (this.newsType === 'regular') {
      newsStream = this.getHeadlines();
    } else if (this.newsType === 'tech') {
      newsStream = this.getTechNews(); 
    } else if (this.newsType === 'business') {
      newsStream = this.getBusinessNews();
    } else {
      throw new Error('Invalid news type');
    }

    return new Promise((resolve, reject) => {
      newsStream.subscribe({
        next: (data: any) => {
          console.log(data.articles[index].title);
          resolve(data.articles[index]);
        },
        error: (error: any) => {
          reject(error);
        },
      });
    });
  }

  // Method to get the URL of the article returned by the getArticle method above
  getArticleUrl(index: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getHeadlines().subscribe(
        (data: any) => {
          console.log(data.articles[index].url);
          resolve(data.articles[index].url);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  // Method to get index of article in array
  getArticleIndex(newsStream: any[], article: any) {
    return newsStream.indexOf(article);
  }

  // Method to open article page and pass index of article
  openArticlePage(newsStream: any[], article: any) {
    const index = this.getArticleIndex(newsStream, article);
    this.router.navigate(['/article', { index: index }]);
  }

  // Method to get headlines from the API
  getHeadlines(): Observable<any> {
    return this.http.get(this.headlinesUrl);
  }

  // Method to get tech news from the API
  getTechNews(): Observable<any> {
    return this.http.get(this.techUrl);
  }

  // Method to get business news from the API
  getBusinessNews(): Observable<any> {
    return this.http.get(this.businessUrl);
  }

  // Method to set the news type
  setNewsType(type: string) {
    this.newsType = type;
  }
}
