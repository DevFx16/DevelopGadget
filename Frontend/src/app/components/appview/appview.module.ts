import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppviewRoutingModule } from './appview-routing.module';
import { AppviewComponent } from './appview.component';
import { AppService } from 'src/app/services/app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppviewComponent,
  ],
  imports: [
    CommonModule,
    AppviewRoutingModule,
    HttpClientModule
  ],
  providers: [AppService]
})
export class AppviewModule { }
