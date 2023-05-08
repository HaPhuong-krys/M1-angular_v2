import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { PcBureauServiceService } from '../pc-bureau-service.service';
import { LigneDeCommande } from '../Model/LigneDeCommande';
import { Router } from '@angular/router';
import { PanierService } from '../panier.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent {

  article: Array<Articles> = [];

  constructor(private bureauService : PcBureauServiceService, private router : Router, private panierService : PanierService, private articleService : ArticleService){

  }


  ngOnInit(): void {
    this.getArticlePCbureau();
  }

  getArticlePCbureau() {
    this.bureauService.getArticlePcBureau().subscribe(res => {
      this.article = res;
      console.log(this.article);
    });
  }

  confirmSupprimerArticle(art : Articles){
    if (window.confirm(`Voulez-vous supprimer définitivement cet article:  (${art.libelle}) ?`)) {
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
