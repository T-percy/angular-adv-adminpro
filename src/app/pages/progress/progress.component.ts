import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progressBar1: number = 25;
  progressBar2: number = 35;

  get getProgressBar1() {
    return `${ this.progressBar1 }%`;
  }

  get getProgressBar2() {
    return `${ this.progressBar2 }%`;
  }

  valorHijo( valor: number ) {
    console.log('Hey!!!', valor);
  }

}
