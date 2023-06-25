// Service to fetch news from the API
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private newsUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=a478fa2e8e864f0bb9af9b26bc168b80';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    const apiKey = 'a478fa2e8e864f0bb9af9b26bc168b80';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    return this.http.get<News[]>(url).pipe(map((res) => res));
  }
}
