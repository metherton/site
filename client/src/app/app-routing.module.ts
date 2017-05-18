/**
 * Created by martin on 18/05/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAlgorithmComponent } from './app-algorithm/app-algorithm.component'

const routes: Routes = [
  {path: 'algorithm', component: AppAlgorithmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
