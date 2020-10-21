import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

  uri = environment.url+'pages/';

  get(id){
    return this.http.get(this.uri+id);
  }
  post(page) {
    return this.http.post<any>(this.uri, page)
  }
  delete(page) {
    return this.http.delete<any>(this.uri + page + '/')
  }
  update(page) {
    return this.http.patch<any>(this.uri + page.id + '/', page)
  }
}
