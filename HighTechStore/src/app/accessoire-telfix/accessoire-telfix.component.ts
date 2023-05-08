import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { AccesTelfixServiceService } from '../acces-telfix-service.service';
import { LigneDeCommande } from '../Model/LigneDeCommande';
import { PanierService } from '../panier.service';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-accessoire-telfix',
  templateUrl: './accessoire-telfix.component.html',
  styleUrls: ['./accessoire-telfix.component.css']
})
export class AccessoireTelfixComponent {

  article: Array<Articles> = [];

  constructor(private accessoireTel : AccesTelfixServiceService, private articleService : ArticleService,  private panierService : PanierService, private router : Router){

  }

  ngOnInit(): void {
    this.getArticleAccessoireTelFix();
  }

  getArticleAccessoireTelFix() {
    this.accessoireTel.getArticleAccessoireTelFix().subscribe(res => {
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
