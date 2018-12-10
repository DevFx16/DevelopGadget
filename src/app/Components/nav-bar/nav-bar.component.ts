import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() Ruta = new EventEmitter();
  Idioma: string = 'ES';

  constructor() { this.Ruta.emit('../Idioma/' + this.Idioma + '.json'); }

  ngOnInit() {}

  Cambio(Prefijo: string){
    this.Idioma = Prefijo;
    this.Ruta.emit('../Idioma/' + this.Idioma + '.json');
  }

}
