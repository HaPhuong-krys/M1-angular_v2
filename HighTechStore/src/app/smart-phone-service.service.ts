import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class SmartPhoneServiceService {

  url_smartphone = 'http://localhost:8080/Projet-REST-V1/articles/list/smartphone';


  constructor(private http: HttpClient) { }

  getArticleSmartphone():Observable<Array<Articles>>{
    return this.http.get<Array<Articles>>(this.url_smartphone);
  }
}
