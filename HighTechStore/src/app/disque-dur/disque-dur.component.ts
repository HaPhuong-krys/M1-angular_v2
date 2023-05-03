import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { DisqueDurServiceService } from '../disque-dur-service.service';

@Component({
  selector: 'app-disque-dur',
  templateUrl: './disque-dur.component.html',
  styleUrls: ['./disque-dur.component.css']
})
export class DisqueDurComponent {

  article: Array<Articles> = [];

  constructor(private disqueService : DisqueDurServiceService){

  }

  ngOnInit(): void {
    this.getArticleDique();
  }

  getArticleDique() {
    this.disqueService.getArticleDisqurDur().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }


}
