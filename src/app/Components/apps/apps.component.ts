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
  Apps: App[];
  Select: String = localStorage.getItem('Select');
  App: App = {
    Id: '',
    Nombre: '',
    DescripcionEn: '',
    DescripcionEs: '',
    Imagenes: [],
    Link: '',
    Logo: ''
  };

  constructor(private Http: HttpClient) { }

  async ngOnInit() {
    console.log(this.Select);
    await this.Http.post('http://developgadget-backend.herokuapp.com/App', Query).toPromise().then(apps => {
      this.Apps = (apps as any).data.GetApps as App[];
      console.log(this.Apps);
      this.Loader = true;
    });
  }

  ngDoCheck() {
    this.Textos = JSON.parse(localStorage.getItem('Idioma'));
    this.Select = localStorage.getItem('Select');
  }

  Ruta(){
    window.open(this.App.Link, '_blank')
  }

}
