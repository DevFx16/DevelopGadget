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

  constructor() { }

  ngOnInit() {
    this.Cambio(this.Ruta);
    setTimeout(() => {
      this.Loader = true;
    }, 2000);
  }

  Cambio(event){
    this.Ruta = event;
    fetch(this.Ruta).then(json => json.json().then(json2 => this.Textos = json2));
  }

}
