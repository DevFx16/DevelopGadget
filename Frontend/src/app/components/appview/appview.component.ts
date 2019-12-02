import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { App } from 'src/app/models/app.model';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;
@Component({
  selector: 'app-appview',
  templateUrl: './appview.component.html',
  styleUrls: ['./appview.component.sass']
})
export class AppviewComponent implements OnInit, OnDestroy {

  Loading: Subject<boolean> = new BehaviorSubject(true);
  Apps: Subject<Array<App>> = new BehaviorSubject([]);
  AppSelect: Subject<App> = new BehaviorSubject({_id: '', Nombre: '', Logo: '', Link: '', DescripcionEs: '', DescripcionEn: '', Imagenes: []});
  Subs: Subscription;

  constructor(private apps: AppService, private translate: TranslateService) { }

  ngOnInit() {
    this.Subs = this.apps.getApps().subscribe(data => {
      this.Apps.next(data);
      this.Loading.next(false);
      this.carousel('.carousel');
    });
  }

  ngOnDestroy(): void {
    this.Subs.unsubscribe();
  }

  showModal(app: App) {
    this.AppSelect.next(app);
    $('#exampleModal').modal('show');
    this.carousel('#modal');
  }

  carousel(id: string) {
    setTimeout(() => {
      $(id).carousel({
        interval: 2000,
        cycle: true
      });
      $(id).carousel('next');
    }, 2000);
  }

  appDes(app: App): string {
    return this.translate.currentLang === 'en' ? app.DescripcionEn : app.DescripcionEs;
  }


}
