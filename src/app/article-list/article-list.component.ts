import { Component, OnInit } from '@angular/core';
import { ArticleListService } from './article-list.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private serv_article_list: ArticleListService) { }
  article_resource : any;
  ngOnInit() {
  this.bindArticles();
   }

  bindArticles() {

		this.article_resource = {
			"id": 8,
			"title": "Hello data updated even now",
			"body": "Ducimus et repellendus eveniet ab nihil labore. Autem in nulla vel rerum sit ut omnis. Nulla est sunt minus. Dolores sapiente totam consequuntur omnis officiis voluptas ut.",
			"author": "Velda Lemke",
			"editor": "Sadie Schmidt IV",
			"active": 1,
			"created_at": "2018-09-04 11:27:22",
			"updated_at": "2018-09-04 11:27:22"
  };
  
  //  this.article_resource['request_type'] = 'get';
	//  this.article_resource['request_type'] = 'patch';
  //  this.article_resource['request_type'] = 'delete';
  
    this.serv_article_list.getFullArticleList(1)
    .subscribe(      
      (article_list_data$: any) => {article_list_data$
      console.log(article_list_data$)}
    );
  }

}
