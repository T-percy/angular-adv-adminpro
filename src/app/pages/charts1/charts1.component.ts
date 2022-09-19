import { Component } from '@angular/core';


@Component({
  selector: 'app-charts1',
  templateUrl: './charts1.component.html',
  styles: [
  ]
})
export class Charts1Component {

public labels1: string[] = [ 'Gaseosas', 'Mecatos', 'Fritos' ];
public data1: number[] = [ 100, 30, 70 ];

}
