import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ArticleListService } from './article-list/article-list.service';
import { HttpClientModule } from '@angular/common/http';
/*----------------implimentated for lazy loading-----------------*/
/*import { ArticleListComponent } from './article-list/article-list.component';*/

@NgModule({
  declarations: [
    AppComponent,
    /*ArticleListComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
