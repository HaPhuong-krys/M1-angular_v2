import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class TelephoneFixServiceService {
  url_telFix = 'http://localhost:8080/Projet-REST-V1/articles/list/telephoneFix';
  
  constructor(private http: HttpClient) { }

  getArticleTelephoneFix(){
    return this.http.get<Array<Articles>>(this.url_telFix);
  }
}
