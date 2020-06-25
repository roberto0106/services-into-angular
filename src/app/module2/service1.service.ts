import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  // tslint:disable-next-line: ban-types
  public num: Number;
  constructor(){
      this.num = Math.round(Math.random() * 1000);
      console.log('Service1 - constructor()');
  }
}
