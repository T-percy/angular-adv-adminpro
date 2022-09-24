import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/'},
        {titulo: 'Barra de progreso', url: 'progress'},
        {titulo: 'Gráficas', url: 'charts1'},
        {titulo: 'Promesas', url: 'promises'},
        {titulo: 'Rxjs', url: 'rxjs'},
      ]
    },
  ];

  constructor() { }
}
