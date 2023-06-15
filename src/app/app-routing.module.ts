import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './user/index/index.component';
import { DetailComponent } from './user/detail/detail.component';

const routes: Routes = [
  {path: 'users',component: IndexComponent},
  {path: "details/:login", component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
