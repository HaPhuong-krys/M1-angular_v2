import { Injectable } from '@angular/core';
import { Articles } from './Model/Articles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsbServiceService {

  url_usb = 'http://localhost:8080/Projet-REST-V1/articles/list/USB';

  constructor(private http:HttpClient) { }

  getArticleUSB():Observable<Array<Articles>>{
    return this.http.get<Array<Articles>>(this.url_usb);
  }
}
