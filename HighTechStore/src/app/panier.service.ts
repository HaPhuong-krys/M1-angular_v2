import { Injectable } from '@angular/core';
import { LigneDeCommande } from './Model/LigneDeCommande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public items: LigneDeCommande[] = [];

  constructor() { }
  
  private saveCart() {
    localStorage.setItem('panier', JSON.stringify(this.items));
  }

  private loadCart() {
    const data = localStorage.getItem('panier');
    if (data) {
      this.items = JSON.parse(data);
    }
  }
  
  //fait en sorte que si le produit qu'on ouhaite ajouter existe deja dans le panier, c'est la quantité qui augmente 
  ajouterAuPanier(item: LigneDeCommande) {
    const index = this.items.findIndex(i => i.articleId === item.articleId);
    if (index !== -1) {
      this.items[index].quantite += item.quantite;
    } else {
      this.items.push(item);
    }
    this.saveCart();
  }
  
  //Modifie egalement le prix du produit
  modifierLigne(item: LigneDeCommande, newQuantite: number) {
    const index = this.items.findIndex(i => i.commandId === item.commandId);
    if (index > -1) {
      this.items[index].quantite = newQuantite;
      this.saveCart();
    }
  }
  

  supprimerDuPanier(item: LigneDeCommande) {
    const index = this.items.indexOf(item);
    console.log(this.items);
    this.items.splice(index, 1);
    this.saveCart();
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

  // validerPanier() {
  //   // Bouclez sur chaque ligne de commande et enregistrez-les
  //   for (const ligneDeCommande of this.panier) {
  //     this.votreService.enregistrerLigneDeCommande(ligneDeCommande).subscribe();
  //   }
  // }


}