import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class AccesTelfixServiceService {

  url_accesstel= 'http://localhost:8080/Projet-REST-V1/articles/list/accessoire_tel';
  
  constructor(private http:HttpClient) { }
  
  getArticleAccessoireTelFix(){
    return this.http.get<Array<Articles>>(this.url_accesstel);
  }

}
