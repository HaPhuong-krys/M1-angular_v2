import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class DisqueDurServiceService {

  url_disque = 'http://localhost:8080/Projet-REST-V1/articles/list/Disque_dur';
  
  constructor(private http:HttpClient) { }

  getArticleDisqurDur(){
    return this.http.get<Array<Articles>>(this.url_disque);
  }

}
