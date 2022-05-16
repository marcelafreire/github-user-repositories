import { Component } from "@angular/core";
import { GithubRepos } from "src/app/shared/models/githubrepos.model";
import { GithubUser } from "src/app/shared/models/githubuser.model";
import { GithubSearchService } from "src/app/shared/services/github/github-search.service";

@Component({
  selector: 'app-github-user-search',
  templateUrl: './github-user-search.component.html',
})
export class GithubUserSearchComponent {
  username: string;
  userInfo: GithubUser;
  githubRepos: GithubRepos[] = [];
  githubReposFilter: GithubRepos[] = [];
  repoName: string;
  repStars: number;
  loading: boolean;

  constructor(private githubService: GithubSearchService) {
    this.verificaConexao();
  }

  getUser() {
    this.loading = true;

    // setTimeout(() => {
    this.githubService.getUser(this.username).subscribe({
      next: (user: GithubUser) => {
        this.userInfo = user;
        this.githubService.getRepositories(user.repos_url).subscribe({
          next: (repos) => {
            this.githubRepos = repos;
            this.githubReposFilter = repos;
            console.log(this.githubReposFilter)
          },
          error: () => {},
          complete: () => (this.loading = false),
        });
      },
      error: () => {},
      complete: () => {
        this.loading = false;
      },
    });
    // }, 100);
  }


  verificaConexao() {
    window.addEventListener("online", () => {
      alert("Your browser is working online.");
    });
    window.addEventListener("offline", () => {
      alert("Your browser is working offline.");
    });
  }
}
