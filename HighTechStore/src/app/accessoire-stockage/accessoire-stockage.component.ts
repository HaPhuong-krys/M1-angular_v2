import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { AccessoireStokageServiceService } from '../accessoire-stokage-service.service';
import { LigneDeCommande } from '../Model/LigneDeCommande';
import { Router } from '@angular/router';
import { PanierService } from '../panier.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-accessoire-stockage',
  templateUrl: './accessoire-stockage.component.html',
  styleUrls: ['./accessoire-stockage.component.css']
})
export class AccessoireStockageComponent {

  article: Array<Articles> = [];

  constructor(private stockService : AccessoireStokageServiceService, private articleService : ArticleService, private router : Router, private panierService : PanierService){

  }

  ngOnInit(): void {
    this.getArticleStock();
  }

  getArticleStock() {
    this.stockService.getArticleStock().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }
  confirmSupprimerArticle(art : Articles){
    if (window.confirm(`Voulez-vous supprimer définitivement cet article (${art.libelle}) ?`)) {
      this.supprimerArticle(art);
    }
  }
  supprimerArticle(art: Articles){
      this.articleService.supprimerArticle(art).subscribe(
        () => {
          console.log(`Article ${art.id} supprimé`);
          this.article = this.article.filter(article => article.id !== art.id);
          
        }
      );
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
