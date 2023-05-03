import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { AccesOrdiServiceService } from '../acces-ordi-service.service';

@Component({
  selector: 'app-accessoire-ordi',
  templateUrl: './accessoire-ordi.component.html',
  styleUrls: ['./accessoire-ordi.component.css']
})
export class AccessoireOrdiComponent {

  article: Array<Articles> = [];

  constructor(private access_ordi : AccesOrdiServiceService){

  }


  ngOnInit(): void {
    this.getArticleAccessOrdi();
  }

  getArticleAccessOrdi() {
    this.access_ordi.getArticleAccesoireOrdi().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
