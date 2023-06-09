import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './Model/Categories';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://localhost:8080/Projet-REST-V1/articles/add';
  delUrl = 'http://localhost:8080/Projet-REST-V1/articles/delete';

  constructor(private httpClient :HttpClient) { }

  creerArticle(article : Articles): Observable<Object> {
    console.log(article);
    return this.httpClient.post(`${this.apiUrl}`,article);
  }

  supprimerArticle(art: Articles){
    return this.httpClient.delete(`${this.delUrl}/${art.id}`);
  }

}
