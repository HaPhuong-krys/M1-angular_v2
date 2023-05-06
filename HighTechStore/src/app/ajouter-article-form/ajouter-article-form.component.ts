import { Component, OnInit } from '@angular/core';
import { Categories } from '../Model/Categories';
import { FormCreationArticleService } from '../form-creation-article.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Articles } from '../Model/Articles';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-ajouter-article-form',
  templateUrl: './ajouter-article-form.component.html',
  styleUrls: ['./ajouter-article-form.component.css']
})
export class AjouterArticleFormComponent implements OnInit {
  
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

  constructor(private route : Router, private articleService : ArticleService, private formService : FormCreationArticleService){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.formService.getAllCategories().subscribe(res => {
      this.cats = res;
      console.log(this.cats);
    });
  }

  articleForm = new FormGroup({
    libelle: new FormControl('',Validators.required),
    marque:new FormControl('', Validators.required),
    prix: new FormControl('', [Validators.pattern(/^{2, 10}/),Validators.required]),
    categorie: new FormControl('', Validators.required),
    photo: new FormControl('',Validators.required )
  });

   getCategoryFolderName(categoryName: string): string {
    switch (categoryName) {
      case 'PC PORTABLE':
        return 'Pc_Portable';
      case 'STOCKAGE':
        return 'acc_sto';
      case 'PC BUREAU':
        return 'bureau';
      case 'Accessoire Ordinateur':
        return 'acc_or';
      case 'Smart Phone':
        return 'smart';
      case 'STel Fix ':
       return 'fixe';
      case 'Accessoire Tel':
        return 'acc_tel';
      case 'Disque Dur':
        return 'dis_dur';
      case 'Clé USB':
        return 'usb';
      default:
        return 'error';
    }
  }

  onSubmit() {
    console.log(this.article);
    this.articleService.creerArticle(this.article).subscribe(
      data=>{
        alert("Ajouter une nouvelle article success")
      },error=>alert("Désollé, echec ajout")  
    );
    
  }
 
}
