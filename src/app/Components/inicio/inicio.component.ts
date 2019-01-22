import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  Loader: boolean = false;
  Ruta: string = '../../../assets/ES.json';
  Textos: any;
  Iconos: object = ['https://image.flaticon.com/icons/svg/1383/1383260.svg', 'https://image.flaticon.com/icons/svg/25/25231.svg', 'https://image.flaticon.com/icons/svg/1383/1383262.svg', 'https://image.flaticon.com/icons/svg/1295/1295555.svg']

  constructor() { this.Cambio(this.Ruta); }

  ngOnInit() {
    setTimeout(() => {
      this.Loader = true;
    }, 2000);
  }

  Cambio(event: string) {
    this.Ruta = event;
    fetch(this.Ruta).then(json => json.json().then(json2 => this.Textos = json2));
  }

}
