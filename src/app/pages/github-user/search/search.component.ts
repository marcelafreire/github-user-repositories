import { Component, OnInit } from "@angular/core";
import { GithubRepos } from "src/app/shared/models/githubrepos.model";
import { GithubUser } from "src/app/shared/models/githubuser.model";
import { GithubSearchService } from "src/app/shared/services/github/github-search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  username: string;
  githubRepos: GithubRepos[] = []
  githubReposFilter: GithubRepos[] = []
  repoName: string;
  loading: boolean;

  constructor(private githubService: GithubSearchService) {}

  ngOnInit(): void {
  }

  getUser() {
    this.loading = true;

    // setTimeout(() => {
      this.githubService.getUser(this.username).subscribe({
        next: (user: GithubUser) => {
          this.githubService.getRepositories(user.repos_url).subscribe({
            next: (repos) => {
              this.githubRepos = repos
              this.githubReposFilter = repos
            },
            error: () => {},
            complete: () =>  this.loading = false,
          })
        },
        error: () => {},
        complete: () => {}
      }) 
    // }, 100);
  }

  orderRepos(sortType: string) {
    const reps = this.githubReposFilter
    if(sortType === 'name') {
      this.githubRepos = [...reps].sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0)
    } else {
      this.githubRepos = [...reps].sort((a, b) => a.stargazers_count - b.stargazers_count);
    }
  }

  searchRepoBy() {
    const reps = this.githubReposFilter
    this.githubRepos = reps.filter((rep) =>  rep.name.toLowerCase().includes(this.repoName.toLowerCase()))
  }
}
