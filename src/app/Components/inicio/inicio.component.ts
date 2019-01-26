import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, DoCheck {

  Loader: boolean = false;
  Textos: any = JSON.parse(localStorage.getItem('Idioma'));
  Iconos: object = ['https://image.flaticon.com/icons/svg/1383/1383260.svg', 'https://image.flaticon.com/icons/svg/25/25231.svg', 'https://image.flaticon.com/icons/svg/1383/1383262.svg']

  constructor() {}

  ngDoCheck() {
    this.Textos = JSON.parse(localStorage.getItem('Idioma'));
  }

  ngOnInit() {
    setTimeout(() => {
      this.Loader = true;
    }, 2000);
  }
}
