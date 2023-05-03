import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent {

    constructor(private authService: LoginService) { }
  
    onClick() {
      this.authService.logout();
    }
  
  
}
