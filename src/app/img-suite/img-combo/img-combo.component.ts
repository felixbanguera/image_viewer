import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'combo',
  templateUrl: './img-combo.component.html',
  styleUrls: ['./img-combo.component.css']
})
export class ImgComboComponent implements OnInit {
  @Input() imgUrl: String ;
  @Input() index: String ;
  @Output() imgUrlOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendChange(val) {
    this.imgUrl = val;
    console.log('combo:imgUrl', this.imgUrl);
    this.imgUrlOut.emit([this.index, this.imgUrl]);
  }

}
