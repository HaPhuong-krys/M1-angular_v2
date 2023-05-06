import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleIdServiceService {

  private url = 'http://localhost:8080/Projet-REST-V1/articles/list';

  private modifUrl = 'http://localhost:8080/Projet-REST-V1/articles/update';
  
  constructor(private http: HttpClient) { }

  getArticleById(id: number): Observable<Articles> {
    return this.http.get<Articles>(`${this.url}/${id}`);
  }

  modifierArticle(article : Articles):Observable<any>{
    return this.http.put(`${this.modifUrl}/${article.id}`, article);
  }
}
