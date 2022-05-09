import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GithubSearchComponent } from "./pages/github-user/github-search/github-search.component";

const routes: Routes = [
  { path: 'search', component: GithubSearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  // {
  //   path: "search",
  //   loadChildren: () =>
  //     import("./pages/github-user/github-user.module").then(
  //       (m) => m.GithubUserModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
