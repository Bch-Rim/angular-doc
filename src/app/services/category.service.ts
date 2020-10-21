import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  uri = environment.url+'categories/';

  get(){
    return this.http.get(this.uri);
  }
  post(categorie) {
    console.log(categorie)
    return this.http.post<any>(this.uri, categorie)
  }
  delete(categorie) {
    return this.http.delete<any>(this.uri + categorie+'/') 
  }

  update(categorie) {
    return this.http.patch<any>(this.uri+ categorie.id+'/', categorie)
  }
}

