import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  BadgesMovil: Array<any> = [
    { Badge: 'React Native', Link: 'https://facebook.github.io/react-native/' },
    { Badge: 'Ionic Framework', Link: 'https://ionicframework.com/' },
    { Badge: 'Flutter', Link: 'https://flutter-es.io/' }
  ];

  BadgesDesktop: Array<any> = [
    { Badge: 'Java', Link: 'https://go.java/index.html?intcmp=gojava-banner-java-com' },
    { Badge: 'C#', Link: 'https://docs.microsoft.com/es-es/dotnet/csharp/' }
  ];

  BadgesWeb: Array<any> = [
    { Badge: 'Angular', Link: 'https://angular.io/' },
    { Badge: 'AngularJs', Link: 'https://angularjs.org/' },
    { Badge: 'Bootstrap', Link: 'https://getbootstrap.com/' },
    { Badge: 'Semantic', Link: 'https://semantic-ui.com/' },
    { Badge: 'HTML5', Link: 'https://developer.mozilla.org/es/docs/HTML/HTML5' },
    { Badge: 'CSS3', Link: 'https://developer.mozilla.org/es/docs/Archive/CSS3' },
    { Badge: '.NetCore', Link: 'https://dotnet.microsoft.com/apps/aspnet/apis' },
    { Badge: 'NodeJS', Link: 'https://nodejs.org/es/' },
    { Badge: 'JavaScript', Link: 'https://www.javascript.com/' },
    { Badge: 'Dart', Link: 'https://dart.dev/' },
  ];

  Social: Array<any> = [
    { Image: '../../assets/github-logo.png', Link: 'https://github.com/DevelopGadget' },
    { Image: '../../assets/linkedin.png', Link: 'https://www.linkedin.com/in/fernando-jos%C3%A9-araujo-figueroa-138ab1158' },
    { Image: '../../assets/facebook.png', Link: 'https://www.facebook.com/DevelopGadget-110981330273065/' },
    { Image: '../../assets/gmail.png', Link: 'mailto:developgadget@gmail.com' },
    { Image: '../../assets/iconfinder_gogleplay_519195.png', Link: 'https://play.google.com/store/apps/developer?id=Fernando+Araujo' },
    { Image: '../../assets/youtube.png', Link: 'https://www.youtube.com/channel/UCAu2-R1M1P3sZoDXQzNjhVQ' }
  ];

  Columns: Array<any> = [
    { Title: 'Movíl', TitleEn: 'Mobile', Skills: this.BadgesMovil, Image: '../../assets/code.png' },
    { Title: 'Escritorio', TitleEn: 'Desktop', Skills: this.BadgesDesktop, Image: '../../assets/graphic.png' },
    { Title: 'Web', TitleEn: 'Web', Skills: this.BadgesWeb, Image: '../../assets/edition.png' }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  redirect(link: string) {
    window.open(link, '_blank');
  }

  colName(index: number): string {
    return this.translate.currentLang === 'en' ? this.Columns[index].TitleEn : this.Columns[index].Title;
  }

}
