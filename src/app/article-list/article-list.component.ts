import { Component, OnInit } from '@angular/core';
import { ArticleListService } from './article-list.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private serv_article_list: ArticleListService) { }
  article_array_keys: any[];
  article_resource = {
      "id": 11,
      "title": "Hello data updated even now",
      "body": "Ducimus et repellendus eveniet ab nihil labore. Autem in nulla vel rerum sit ut omnis. Nulla est sunt minus. Dolores sapiente totam consequuntur omnis officiis voluptas ut.",
      "author": "Velda Lemke",
      "editor": "Sadie Schmidt IV",
      "active": 1,
      "created_at": "2018-09-04 11:27:22",
      "updated_at": "2018-09-04 11:27:22"
    };

  ngOnInit() {

    this.bindArticles(this.article_array_keys);
  }

  bindArticles(new_article_resource) {

    this.article_resource = Object.assign(this.article_resource,new_article_resource);
  
    this.serv_article_list.getFullArticleList(this.article_resource['request_type'], this.article_resource)
      .subscribe(
        (article_list_data: any) => { 
          console.log('non converted array', article_list_data);
          this.article_array_keys = article_list_data;
        });
  }
  item_editable(id) {
    this.article_resource['id'] = id;
    this.article_resource['request_type'] = 'get';
    this.bindArticles(this.article_resource);
  }
}
