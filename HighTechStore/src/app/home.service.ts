import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './Model/Categories';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url = 'http://localhost:8080/Projet-REST-V1/articles/list';
  articleData: any = {};

  constructor(private http:HttpClient) { }

  getAllArticle():Observable<Array<Articles>>{
    return this.http.get<Array<Articles>>(this.url);
  }
}
