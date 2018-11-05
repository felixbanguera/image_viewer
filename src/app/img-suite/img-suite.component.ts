import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'suite',
  templateUrl: './img-suite.component.html',
  styleUrls: ['./img-suite.component.css']
})
export class ImgSuiteComponent implements OnInit {
  public urlArrSuite = ["","","","",""];
  @Output() toPpal = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setImgUrl(data){
    console.log(data);
    this.urlArrSuite[data[0]] = data[1];
    console.log(this.urlArrSuite);
    this.toPpal.emit(this.urlArrSuite);
  }

}
