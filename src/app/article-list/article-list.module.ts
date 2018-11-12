import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListComponent } from './article-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ArticleListRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [ArticleListComponent]
})
export class ArticleListModule { }
