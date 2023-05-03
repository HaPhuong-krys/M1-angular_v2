import { Component } from '@angular/core';
import { PcPortableServiceService } from '../pc-portable-service.service';
import { Articles } from '../Model/Articles';
import { LigneDeCommande } from '../Model/LigneDeCommande';

import { PanierService } from '../panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent {

  article: Array<Articles> = [];

  constructor(private portableService : PcPortableServiceService, private panierService: PanierService, private router: Router){}

  ngOnInit(): void {
    this.getArticlePCportable();
  }

  getArticlePCportable() {
    this.portableService.getArticlePcPortable().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }

  ajouterAuPanier(article: Articles) {
    const ligneDeCommande = new LigneDeCommande(0,'', 0, 0);
    ligneDeCommande.articleId = article.id!;
    ligneDeCommande.articleName = article.libelle!;
    ligneDeCommande.prix = article.prix!;
    ligneDeCommande.quantite += 1;
  
    this.panierService.ajouterAuPanier(ligneDeCommande);
    this.router.navigate(['/panier']);
  }

}
