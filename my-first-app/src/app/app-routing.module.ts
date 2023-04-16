import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservHomeComponent } from './observ-home/observ-home.component';
import { ObservUserComponent } from './observ-user/observ-user.component';

const routes: Routes = [
  {path: 'observ', component: ObservHomeComponent},
  {path: 'observ/user/:id', component: ObservUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
