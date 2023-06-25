import { Article } from './article.model';

// Model for news data from the API response
export interface News {
    status: string;
    totalResults: number;
    articles: Article[];
}