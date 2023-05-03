import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './Model/Categories';
import { Articles } from './Model/Articles';


@Injectable({
  providedIn: 'root'
})
export class FormCreationArticleService {

  url = 'http://localhost:8080/Projet-REST-V1/categories/list';

  addUrl = 'http://localhost:8080/Projet-REST-V1/articles';
  
  articleData: any = {};

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Array<Categories>>{
    return this.http.get<Array<Categories>>(this.url);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addArticle(article: Articles): Observable<Articles> {
    const url = `${this.addUrl}/add`;
    return this.http.post<Articles>(url, article, this.httpOptions);
    //return this.http.post<Articles[]>(`${this.addUrl}/add`, article);
  }

}
