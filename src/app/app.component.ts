import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Textos: any;
  Idioma: string = 'ES';

  constructor() {
    fetch('../../../assets/' + this.Idioma + '.json').then(json => json.json().then(json2 => this.Textos = json2));
  }

  ngOnInit() { }

  Cambio(Prefijo: string) {
    this.Idioma = Prefijo;
    fetch('../../../assets/' + Prefijo + '.json').then(json => json.json().then(json2 => this.Textos = json2));
  }
}
