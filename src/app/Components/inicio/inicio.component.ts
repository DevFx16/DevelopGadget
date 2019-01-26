import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, DoCheck {

  Textos: any = JSON.parse(localStorage.getItem('Idioma'));
  Iconos: object = [
    {
      Img: 'https://image.flaticon.com/icons/svg/1383/1383260.svg', 
      Funcion: () => window.open('https://www.youtube.com/channel/UCbTxhHq8iav_5Loi0F7pOkw', '_blank')
    },
    {
      Img: 'https://image.flaticon.com/icons/svg/25/25231.svg',
      Funcion: () => window.open('https://github.com/DevelopGadget', '_blank')
    },
    {
      Img: 'https://image.flaticon.com/icons/svg/1383/1383262.svg',
      Funcion: () => window.open('https://www.linkedin.com/in/fernando-jos%C3%A9-araujo-figueroa-138ab1158', '_blank')
    }
  ]

  constructor() { }

  ngDoCheck() {
    this.Textos = JSON.parse(localStorage.getItem('Idioma'));
  }

  ngOnInit() {
  }
}
