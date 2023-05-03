import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { AccessoireStokageServiceService } from '../accessoire-stokage-service.service';

@Component({
  selector: 'app-accessoire-stockage',
  templateUrl: './accessoire-stockage.component.html',
  styleUrls: ['./accessoire-stockage.component.css']
})
export class AccessoireStockageComponent {

  article: Array<Articles> = [];

  constructor(private stockService : AccessoireStokageServiceService){

  }

  ngOnInit(): void {
    this.getArticleStock();
  }

  getArticleStock() {
    this.stockService.getArticleStock().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
