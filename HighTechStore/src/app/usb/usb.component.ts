import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { UsbServiceService } from '../usb-service.service';

@Component({
  selector: 'app-usb',
  templateUrl: './usb.component.html',
  styleUrls: ['./usb.component.css']
})
export class UsbComponent {

  article: Array<Articles> = [];

  constructor(private usbService : UsbServiceService){

  }

  ngOnInit(): void {
    this.getArticleUSB();
  }

  getArticleUSB() {
    this.usbService.getArticleUSB().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }

}
