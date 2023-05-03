import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { PcBureauServiceService } from '../pc-bureau-service.service';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent {

  article: Array<Articles> = [];

  constructor(private bureauService : PcBureauServiceService){

  }


  ngOnInit(): void {
    this.getArticlePCbureau();
  }

  getArticlePCbureau() {
    this.bureauService.getArticlePcBureau().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
