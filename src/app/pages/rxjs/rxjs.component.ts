import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {
    const observable$ = new Observable( observer => {

      let i = -1;

      const intervalo = setInterval(  () => {
        i++;
        observer.next(i);

        if (i === 4 ) {
          clearInterval(intervalo);
          observer.complete();
        }

      }, 1000 )
    });

    observable$.subscribe(
      valor => console.log('Subs:', valor),
      error => console.warn('Error:', error),
      () => console.info('Observable terminado')
    );

  }

}
