import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })
    //const promesa = new Promise( (resolve, reject) => {
        //resolve('Soy la respuesta asincrona de la promesa');
   // });

    //promesa
      //.then((mensaje) => {
        //console.log(mensaje);
      // })
      //.catch((error) => console.log('Error en mi promesa', error));

      //console.log('Fin del ngOnInit');

    }

    getUsuarios() {

      return new Promise(resolve => {
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(body => resolve(body.data));
      });

    }

}
