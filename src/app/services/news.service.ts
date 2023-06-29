// Service to fetch news from the API
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
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
    this.headlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    this.techNews = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${this.apiKey}`;
  }

  getHeadlines(): Observable<any> {
    return this.http.get(this.headlinesUrl);
  }
  getTechNews(): Observable<any> {
    return this.http.get(this.techNews);
  }
}
