import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserSearchComponent } from './github-user-search/github-user-search.component';

const routes: Routes = [
  {
    path: '',
    component: GithubUserSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubUserRoutingModule { }
