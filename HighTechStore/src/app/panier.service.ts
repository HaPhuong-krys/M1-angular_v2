import { Injectable } from '@angular/core';
import { LigneDeCommandeComponent } from './ligne-de-commande/ligne-de-commande.component';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private items: LigneDeCommandeComponent[] = [];

  constructor() { }

  ajouterAuPanier(item: LigneDeCommandeComponent) {
    this.items.push(item);
    this.saveCart();
  }

  modifierLigne(item: LigneDeCommandeComponent, newQuantite: number) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items[index].quantite = newQuantite;
      this.saveCart();
    }
  }

  supprimerDuPanier(item: LigneDeCommandeComponent) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  getItems() {
    this.loadCart();
    return this.items;
  }

  viderPanier() {
    this.items = [];
    this.saveCart();
  }

  getTotal() {
    this.loadCart();
    return this.items.reduce((acc, item) => acc + (item.quantite * item.prix), 0);
  }

  private saveCart() {
    localStorage.setItem('panier', JSON.stringify(this.items));
  }

  private loadCart() {
    const data = localStorage.getItem('panier');
    if (data) {
      this.items = JSON.parse(data);
    }
  }
}
