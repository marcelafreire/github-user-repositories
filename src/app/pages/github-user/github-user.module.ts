import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubUserRoutingModule } from './github-user-routing.module';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { FormsModule } from '@angular/forms';
import { GithubUserSearchComponent } from './github-user-search/github-user-search.component';


@NgModule({
  declarations: [
    UserInfosComponent,
    GithubUserSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GithubUserRoutingModule
  ]
})
export class GithubUserModule { }
