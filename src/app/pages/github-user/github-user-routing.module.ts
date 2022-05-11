import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfosComponent } from './user-infos/user-infos.component';

const routes: Routes = [
  {
    path: '',
    component: UserInfosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubUserRoutingModule { }
