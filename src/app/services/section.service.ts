import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }
  uri = environment.urlApi + 'sections/';

  /**
   * 
   * @param section 
   */
  post(section) {
    return this.http.post<any>(this.uri, section)
  }
  update(section) {
    return this.http.put<any>(this.uri + section.id + '/', section)
  }

  edit(section) {
    return this.http.patch<any>(this.uri + section.id + '/', section)
  }

  delete(section) {
    return this.http.delete<any>(this.uri + section.id + '/')
  }
  get(){
    return this.http.get(this.uri);
  }
}

