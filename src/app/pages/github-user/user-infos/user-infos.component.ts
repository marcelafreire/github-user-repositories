import { Component, Input } from '@angular/core';
import { GithubRepos } from 'src/app/shared/models/githubrepos.model';
import { GithubUser } from 'src/app/shared/models/githubuser.model';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
})
export class UserInfosComponent {
  repoName: string;
  repStars: number;
  @Input() userInfo: GithubUser
  @Input() githubRepos: GithubRepos[] = [];
  @Input() githubReposFilter: GithubRepos[] = [];


  orderRepos(sortType: string) {
    const reps = this.githubRepos;
    if (sortType === "name") {
      this.githubReposFilter = [...reps].sort((a, b) => {
        if (a.name !== b.name) {
          return a.name < b.name ? -1 : 1;
        } else {
          return 0;
        }
      });
    } else {
      this.githubReposFilter = [...reps].sort(
        (a, b) => a.stargazers_count - b.stargazers_count
      );
    }
  }

  searchRepoByName() {
    const reps = this.githubRepos;
    this.githubReposFilter = reps.filter((rep) =>
      rep.name.toLowerCase().includes(this.repoName.toLowerCase())
    );
  }

  searchRepoByStars() {
    const reps = this.githubRepos;
    this.githubReposFilter = reps.filter(
      (rep) => rep.stargazers_count == this.repStars
    );
  }

}
