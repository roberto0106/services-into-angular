import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';
import { Service2Service } from 'src/app/service2.service';

@Component({
  selector: 'app-component2',
  // providers: [Service1],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  // tslint:disable-next-line: ban-types
  num: Number = 0;
  text = '';

  constructor(private MyService1: Service1, private MyService2: Service2Service) { }

  ngOnInit(): void {
    this.num = this.MyService1.num;
    this.text = this.MyService2.text;
  }

}
