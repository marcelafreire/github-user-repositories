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
        this.githubService.getRepositories(user.repos_url).subscribe({
          next: (repos) => {
            this.githubRepos = repos;
            this.githubReposFilter = repos;
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

  orderRepos(sortType: string) {
    const reps = this.githubReposFilter;
    if (sortType === "name") {
      this.githubRepos = [...reps].sort((a, b) => {
        if (a.name !== b.name) {
          return a.name < b.name ? -1 : 1;
        } else {
          return 0;
        }
      });
    } else {
      this.githubRepos = [...reps].sort(
        (a, b) => a.stargazers_count - b.stargazers_count
      );
    }
  }

  searchRepoByName() {
    const reps = this.githubReposFilter;
    this.githubRepos = reps.filter((rep) =>
      rep.name.toLowerCase().includes(this.repoName.toLowerCase())
    );
  }

  searchRepoByStars() {
    const reps = this.githubReposFilter;
    this.githubRepos = reps.filter(
      (rep) => rep.stargazers_count == this.repStars
    );
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
