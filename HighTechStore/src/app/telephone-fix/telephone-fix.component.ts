import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { TelephoneFixServiceService } from '../telephone-fix-service.service';

@Component({
  selector: 'app-telephone-fix',
  templateUrl: './telephone-fix.component.html',
  styleUrls: ['./telephone-fix.component.css']
})
export class TelephoneFixComponent {

  article: Array<Articles> = [];

  constructor(private teleFixService : TelephoneFixServiceService){

  }

  ngOnInit(): void {
    this.getArticleTelFix();
  }

  getArticleTelFix() {
    this.teleFixService.getArticleTelephoneFix().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
