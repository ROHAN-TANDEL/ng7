import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleListService {
protected base_url = 'http://127.0.0.1:8000/';
protected api = 'api';
private article_resource:  Object;
private _headers = {
  headers: new HttpHeaders({
		'Content-Type':  'text/html',
  })
};
  constructor(private http: HttpClient) { }
  
	public getFullArticleList(method, article_object) {
		console.log('calling full article list service --- --- -- ');

    return this.callArticleUrl(method, article_object)
    .pipe(map(data => data));
}

//url functions
  callArticleUrl(key,article_resource) {
		let api_url = this.base_url + this.api + '/article/';
		switch (key) {
				case 'patch':
				return this.http.patch(api_url + article_resource['id'],article_resource);

				case'delete':
				return this.http.delete(api_url + article_resource['id']);

				case 'get':
				return this.http.get(api_url + article_resource['id']);	

				default:
				return this.http.get(api_url);
		}
}
/* there is no patch call in angular however The patch method is not planned to be supported by angular-in-memory-web-api per this GitHub issue here https://github.com/angular/in-memory-web-api/issues/115 
but you cal customly create yourself a patch call 
export class InMemoryDataService implements InMemoryDbService {
	patch(requestInfo: RequestInfo): Observable<Response> {
			const body = createBody(requestInfo);
			const responseOptions: ResponseOptions = {
					headers: requestInfo.headers,
					url: requestInfo.url,
					body,
					status: STATUS.OK,
					statusText: getStatusText(STATUS.OK),
			}
			return requestInfo.utils.createResponse$(() => responseOptions);
	}
}*/
}
