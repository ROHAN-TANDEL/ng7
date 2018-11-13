import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListComponent } from './article-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ArticleListRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ArticleListComponent]
})
export class ArticleListModule { }
