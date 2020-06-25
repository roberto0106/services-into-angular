import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';
import { Service2Service } from 'src/app/service2.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  // tslint:disable-next-line: ban-types
  num: Number = 0;
  text = '';

  constructor(private MyService1: Service1Service, private MyService2: Service2Service) {}

  ngOnInit(): void {
    this.num = this.MyService1.num;
    this.text = this.MyService2.text;
  }

}
