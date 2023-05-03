import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from '../login.service';
import { Observable } from 'rxjs';
import { PanierService } from '../panier.service'
import { LigneDeCommandeComponent } from '../ligne-de-commande/ligne-de-commande.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$ = this.loginService.isLoggedIn$;
  currentUser$: Observable<User> = this.loginService.currentUser$;

  constructor(private panierService: PanierService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/Connexion']);
  }

  getItems(): LigneDeCommandeComponent[] {
    return this.panierService.getItems();
  }

  getTotal(): number {
    return this.panierService.getTotal();
  }


}
