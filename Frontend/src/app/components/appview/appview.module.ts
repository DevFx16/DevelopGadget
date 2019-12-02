import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppviewRoutingModule } from './appview-routing.module';
import { AppviewComponent } from './appview.component';
import { AppService } from 'src/app/services/app.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppviewComponent,
  ],
  imports: [
    CommonModule,
    AppviewRoutingModule,
    TranslateModule
  ],
  providers: [AppService]
})
export class AppviewModule { }
