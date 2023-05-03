import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { AccesTelfixServiceService } from '../acces-telfix-service.service';

@Component({
  selector: 'app-accessoire-telfix',
  templateUrl: './accessoire-telfix.component.html',
  styleUrls: ['./accessoire-telfix.component.css']
})
export class AccessoireTelfixComponent {

  article: Array<Articles> = [];

  constructor(private accessoireTel : AccesTelfixServiceService){

  }

  ngOnInit(): void {
    this.getArticleAccessoireTelFix();
  }

  getArticleAccessoireTelFix() {
    this.accessoireTel.getArticleAccessoireTelFix().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
