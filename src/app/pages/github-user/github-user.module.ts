import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubUserRoutingModule } from './github-user-routing.module';
import { SearchComponent } from './search/search.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    UserInfosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GithubUserRoutingModule
  ]
})
export class GithubUserModule { }
