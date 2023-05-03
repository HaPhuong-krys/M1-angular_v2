import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class AccessoireStokageServiceService {
  url_stock = 'http://localhost:8080/Projet-REST-V1/articles/list/accessoire_stock';
  constructor(private http: HttpClient) { }

  getArticleStock():Observable<Array<Articles>>{
    return this.http.get<Array<Articles>>(this.url_stock);
    
  }
}
