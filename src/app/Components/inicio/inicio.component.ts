import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit, DoCheck {

  Textos: any = JSON.parse(localStorage.getItem('Idioma'));
  Habilidades: object = this.Valores();
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
    this.Habilidades = this.Valores();
  }

  ngOnInit() {
  }

  Valores(){
    return [
      {
        Title: this.Textos.Movil,
        Img: 'https://i.ibb.co/bHhhqGT/code.png',
        Hab: 'React Native, Ionic Framework, Flutter.'
      },
      {
        Title: this.Textos.Escritorio,
        Img: 'https://i.ibb.co/tLxyNhg/graphic.png',
        Hab: 'Java, C#.'
      },
      {
        Title: this.Textos.Web,
        Img: 'https://i.ibb.co/7R5wZJN/edition.png',
        Hab: 'Angular, AngularJs, React, Bootstrap, Semantic, HTML5, CSS3, .NetCore, NodeJS, JavaScript, Express, Dart.'
      }
    ]
  }
}
