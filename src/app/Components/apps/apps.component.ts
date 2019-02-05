import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Query, App } from '../../Model/App.model';
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit, DoCheck {

  Loader: boolean = false;
  Textos: any = JSON.parse(localStorage.getItem('Idioma'));

  constructor(private Http: HttpClient) { }

  async ngOnInit() {
    await this.Http.post('http://developgadget-backend.herokuapp.com/App', Query).toPromise().then(apps => {
      console.log(apps);
      this.Loader = true;
    })
  }

  ngDoCheck() {
    this.Textos = JSON.parse(localStorage.getItem('Idioma'));
  }
}
