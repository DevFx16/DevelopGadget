import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  BadgesMovil: Array<any> = [
    {
      Badge: 'React Native',
      Link: ''
    },
    {
      Badge: 'Ionic Framework',
      Link: ''
    },
    {
      Badge: 'Flutter',
      Link: ''
    }
  ];

  BadgesDesktop: Array<any> = [
    {
      Badge: 'Java',
      Link: ''
    },
    {
      Badge: 'C#',
      Link: ''
    }
  ];

  BadgesWeb: Array<any> = [
    { Badge: 'Angular', Link: '' },
    { Badge: 'AngularJs', Link: '' },
    { Badge: 'Bootstrap', Link: '' },
    { Badge: 'Semantic', Link: '' },
    { Badge: 'HTML5', Link: '' },
    { Badge: 'CSS3', Link: '' },
    { Badge: '.NetCore', Link: '' },
    { Badge: 'NodeJS', Link: '' },
    { Badge: 'JavaScript', Link: '' },
    { Badge: 'Dart', Link: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

  redirect(link: string) {
    window.open(link, '_blank');
  }

}
