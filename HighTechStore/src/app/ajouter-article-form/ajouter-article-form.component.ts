import { Component, OnInit } from '@angular/core';
import { Categories } from '../Model/Categories';
import { FormCreationArticleService } from '../form-creation-article.service';
import { NgForm } from '@angular/forms';
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
  newArticle: Articles = new Articles();

  categories = [];

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


  onSubmit(form: NgForm) {
    this.formService.addArticle(this.newArticle).subscribe((data: any) => {
      console.log(data);
      alert('Article ajouté avec succès!');
      this.newArticle = new Articles(); // réinitialiser la variable newArticle
      form.reset();
    });
  }
}
