import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  Idioma: string = 'ES';
  Textos: any = JSON.parse(localStorage.getItem('Idioma'));

  constructor() {
  }

  ngOnInit() { }

  Cambio(Prefijo: string) {
    this.Idioma = Prefijo;
    fetch('../../../assets/' + Prefijo + '.json').then(json => json.json().then(json2 => {
      this.Textos = json2;
      localStorage.setItem('Idioma', JSON.stringify(this.Textos));
    }));
  }
}
