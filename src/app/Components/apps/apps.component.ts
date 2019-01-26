import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit, DoCheck {

  Loader: boolean = false;
  Textos: any = JSON.parse(localStorage.getItem('Idioma'));

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.Loader = true;
    }, 2000);
  }
  
  ngDoCheck() {
    this.Textos = JSON.parse(localStorage.getItem('Idioma'));
  }
}
