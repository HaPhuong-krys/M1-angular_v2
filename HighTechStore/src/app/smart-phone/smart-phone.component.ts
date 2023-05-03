import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { SmartPhoneServiceService } from '../smart-phone-service.service';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent {


  article: Array<Articles> = [];

  constructor(private smartphoneService : SmartPhoneServiceService){

  }

  ngOnInit(): void {
    this.getArticleSmartphone();
  }

  getArticleSmartphone() {
    this.smartphoneService.getArticleSmartphone().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
