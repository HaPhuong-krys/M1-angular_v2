import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from './Model/Articles';

@Injectable({
  providedIn: 'root'
})
export class AccesOrdiServiceService {

  access_ordi = 'http://localhost:8080/Projet-REST-V1/articles/list/accessoire_ordi';
  constructor(private http:HttpClient) { }

  getArticleAccesoireOrdi(): Observable<Array<Articles>>{ 
    return this.http.get<Array<Articles>>(this.access_ordi);
  }
}
