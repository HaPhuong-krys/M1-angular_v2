import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from '../Model/Articles';
import { ArticleIdServiceService } from '../article-id-service.service';
import { Categories } from '../Model/Categories';
import { ArticleService } from '../article.service';
import { FormCreationArticleService } from '../form-creation-article.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  
  article:Articles = new Articles();

  categories: Categories[] = [
    {id: 1, nom_categorie: 'PC PORTABLE'},
    {id: 2, nom_categorie: 'PC BUREAU'},
    {id: 3, nom_categorie: 'Accessoire Ordinateur'},
    {id: 4, nom_categorie: 'Smart Phone'}, 
    {id: 5, nom_categorie: 'Tel Fix'},
    {id: 6, nom_categorie: 'Accessoire Tel'},
    {id: 7, nom_categorie: 'Disque Dur'}, 
    {id: 8, nom_categorie: 'Clé USB'}, 
    {id: 9, nom_categorie: 'Accessoire Stockage'}, 
  ];

  selectedCategory =  String;

  cats: Array<Categories> = [];

  constructor(private route : ActivatedRoute, private router: Router, private articleIdService : ArticleIdServiceService, private formService : FormCreationArticleService){}


  ngOnInit(): void {
    this.getCategories();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleIdService.getArticleById(id).subscribe((data: Articles) => {
      this.article = data;
    });
  
  }

  getCategories() {
    this.formService.getAllCategories().subscribe(res => {
      this.cats = res;
      console.log(this.cats);
    });
  }


  modifierArticle(){

    this.articleIdService.modifierArticle(this.article).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }

}
