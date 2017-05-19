/**
 * Created by martin on 18/05/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { AppAlgorithmComponent } from './app-algorithm/app-algorithm.component'
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent },
  {path: 'algorithm', component: AppAlgorithmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
