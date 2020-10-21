import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private user = new BehaviorSubject('guest');
  user$ = this.user.asObservable();

   switchTo(role: string) {
    this.user.next(role);
  }
}



