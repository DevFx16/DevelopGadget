import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppviewComponent } from './appview.component';


const routes: Routes = [{
  path: '',
  component: AppviewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppviewRoutingModule { }
