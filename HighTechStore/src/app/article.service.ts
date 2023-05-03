import { Injectable } from '@angular/core';
import  { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from './Model/Categories';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  private apiUrl = 'http://localhost:8080/articles/ajouter';

  constructor() { }

  

}
