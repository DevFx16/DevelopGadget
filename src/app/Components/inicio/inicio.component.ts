import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  Loader: boolean = false;
  Ruta: string = '../../../assets/ES.json';
  Textos: any;
  Iconos: object = ['https://image.flaticon.com/icons/svg/1383/1383260.svg', 'https://image.flaticon.com/icons/svg/25/25231.svg', 'https://image.flaticon.com/icons/svg/1383/1383262.svg']

  constructor(private route: ActivatedRoute) {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.Textos = params['Textos'];
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.Loader = true;
    }, 2000);
  }
}
