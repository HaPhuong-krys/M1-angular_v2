import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class PcBureauServiceService {

  url_bureau = 'http://localhost:8080/Projet-REST-V1/articles/list/PC_Bureau';

  constructor(private http:HttpClient) { }

  getArticlePcBureau():Observable<Array<Articles>>{
    return this.http.get<Array<Articles>>(this.url_bureau);
  }
}
