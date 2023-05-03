import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { PcPortableServiceService } from '../pc-portable-service.service';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

    article: Array<Articles> = [];
  
    constructor(private homeService : HomeService, private router : Router){
  
    }
  
    ngOnInit(): void {
      this.getArticle();
    }
  
    getArticle() {
      this.homeService.getAllArticle().subscribe(res => {
        this.article = res;
        console.log(this.article);
      });
    }

    details(article:Articles){
      console.log(article.id);
      this.router.navigate(['/article/list', article.id]);
    }
  }
  
