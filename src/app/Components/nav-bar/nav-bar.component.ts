import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() Ruta = new EventEmitter();
  Idioma: string = 'ES';
  Textos: any;

  constructor() { this.Ruta.emit('../../../assets/' + this.Idioma + '.json'); }

  ngOnInit() { fetch('../../../assets/' + this.Idioma + '.json').then(json => json.json().then(json2 => this.Textos = json2)); }

  Cambio(Prefijo: string) {
    this.Idioma = Prefijo;
    this.Ruta.emit('../../../assets/' + this.Idioma + '.json');
    fetch('../../../assets/' + this.Idioma + '.json').then(json => json.json().then(json2 => this.Textos = json2));
  }

}
