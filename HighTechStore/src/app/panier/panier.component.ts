import { Component, OnInit } from '@angular/core';
import { LigneDeCommande } from '../Model/LigneDeCommande';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  items: LigneDeCommande[] = [];
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.items = this.panierService.getItems();
  }

  //Montant total des produits
  getTotal() {
    return this.panierService.getTotal();
  }

  //Vider entièrement le panier
  viderPanier() {
    this.panierService.viderPanier();
    this.items = [];
  }

  //Suppression d'une ligne de commande
  supprimerDuPanier(ligne: LigneDeCommande) {
    this.panierService.supprimerDuPanier(ligne);
    this.items = this.panierService.getItems();
  }

  //Modifier la quantité d'une ligne de commande
  modifierLigne(ligne: LigneDeCommande, newQuantite: number) {
    this.panierService.modifierLigne(ligne, newQuantite);
    this.items = this.panierService.getItems();
  }


  
}