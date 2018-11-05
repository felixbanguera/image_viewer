import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hijos = 5;
  hijosArrTmp  = new Array(this.hijos);
  parentArr = [];
  hijosArr = [];
  title = 'image-viewer';

  ngOnInit(){
    for(let i=0; i<this.hijos; i++){
      this.hijosArr.push(['','','','','']);
    }
  }

  setParentArray(data){
    this.parentArr = data;
    console.log('AppComponent::setParentArray', this.parentArr);
  }

  setChildrenArray(data, i){
    this.hijosArr[i] = data;
    console.log('AppComponent::setChildrenArray', this.hijosArr);
  }
}
