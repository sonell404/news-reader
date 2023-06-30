// Service to fetch news from the API
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private headlinesUrl: string = '';
  private techNews: string = '';
  private apiKey: string = '';

  constructor(private http: HttpClient) {
    this.apiKey = 'a478fa2e8e864f0bb9af9b26bc168b80';
    this.headlinesUrl = `https://newsapi.org/v2/top-headlines?country=ie&apiKey=${this.apiKey}`;
    this.techNews = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.apiKey}`;
  }

  // getHeadline(articleTitle: any): Observable<any> {
  //   return this.http.get(this.headlinesUrl);
  // }

  // Method to get an article object from the array of articles
  getArticle(index: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getHeadlines().subscribe(
        (data: any) => {
          console.log(data.articles[index].title);
          resolve(data.articles[index]);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  // Method to get the URL of the returned by the getArticle method above
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

  getHeadlines(): Observable<any> {
    return this.http.get(this.headlinesUrl);
  }
  getTechNews(): Observable<any> {
    return this.http.get(this.techNews);
  }
}
