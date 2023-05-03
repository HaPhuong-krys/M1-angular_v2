import { Component, OnInit } from '@angular/core';
import { LigneDeCommandeComponent } from '../ligne-de-commande/ligne-de-commande.component';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  items: LigneDeCommandeComponent[] = [];
  
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.items = this.panierService.getItems();
  }

  getTotal() {
    return this.panierService.getTotal();
  }

  viderPanier() {
    this.panierService.viderPanier();
    this.items = [];
  }

  supprimerDuPanier(ligne: LigneDeCommandeComponent) {
    this.panierService.supprimerDuPanier(ligne);
    this.items = this.panierService.getItems();
  }

  modifierLigne(ligne: LigneDeCommandeComponent, newQuantite: number) {
    this.panierService.modifierLigne(ligne, newQuantite);
    this.items = this.panierService.getItems();
  }

  ajouterLigne(ligne: LigneDeCommandeComponent) {
    this.panierService.ajouterAuPanier(ligne);
    this.items = this.panierService.getItems();
  }

  supprimerLigne(articleId: number) {
    const item = this.items.find(i => i.articleId === articleId);
    if (item) {
      this.supprimerDuPanier(item);
    }
  }

  ajouterAuPanier(article: any) {
    const newLigneDeCommande = new LigneDeCommandeComponent();
    newLigneDeCommande.articleId = article.id;
    newLigneDeCommande.articleName = article.libelle;
    newLigneDeCommande.prix = article.prix;
    newLigneDeCommande.quantite = 1;
  
    this.panierService.ajouterAuPanier(newLigneDeCommande);
  }
  
  
}
