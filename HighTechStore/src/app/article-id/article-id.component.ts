import { Component } from '@angular/core';
import { Articles } from '../Model/Articles';
import { ActivatedRoute } from '@angular/router';
import { ArticleIdServiceService } from '../article-id-service.service';

@Component({
  selector: 'app-article-id',
  templateUrl: './article-id.component.html',
  styleUrls: ['./article-id.component.css']
})
export class ArticleIdComponent {

  article?: Articles;

  constructor(
    private route: ActivatedRoute,
    private articleIdService: ArticleIdServiceService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleIdService.getArticleById(id).subscribe((data: Articles) => {
      this.article = data;
    });
  }

}
