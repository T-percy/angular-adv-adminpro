import { Component } from '@angular/core';


@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})
export class Graphic1Component {

public labels1: string[] = [ 'Gaseosas', 'Mecatos', 'Fritos' ];
public data1: number[] = [ 100, 30, 70 ];

}
