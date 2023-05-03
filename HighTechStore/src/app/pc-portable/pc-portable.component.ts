import { Component } from '@angular/core';
import { PcPortableServiceService } from '../pc-portable-service.service';
import { Articles } from '../Model/Articles';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent {

  article: Array<Articles> = [];

  constructor(private portableService : PcPortableServiceService){

  }

  ngOnInit(): void {
    this.getArticlePCportable();
  }

  getArticlePCportable() {
    this.portableService.getArticlePcPortable().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
}
