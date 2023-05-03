import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from './Model/Articles';


@Injectable({
  providedIn: 'root'
})
export class PcPortableServiceService {
  url_portable = 'http://localhost:8080/Projet-REST-V1/articles/list/PC_Portable';

  constructor(private http:HttpClient) { }

  getArticlePcPortable():Observable<Array<Articles>>{
    return this.http.get<Array<Articles>>(this.url_portable);
  }
}
