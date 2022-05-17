import { HttpErrorResponse } from "@angular/common/http";
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
  loading: boolean;
  textoErro: string | null;

  constructor(private githubService: GithubSearchService) {
    this.verificaConexao();
  }

  getUser() {
    this.loading = true;
    this.githubService.getUser(this.username).subscribe({
      next: (user: GithubUser) => {
        this.userInfo = user;
        this.githubService.getRepositories(user.repos_url).subscribe({
          next: (repos) => {
            this.githubRepos = repos;
            this.githubReposFilter = repos;
            this.textoErro = null;
          },
          error: () => {
            this.textoErro = 'Erro na comunicação com o servidor. Tente novamente mais tarde.'
            this.loading = false
          },
          complete: () => (this.loading = false),
        });
      },
      error: (err: HttpErrorResponse) =>  {
        console.log(err)
        if (err.status === 404) {
          this.textoErro = 'Usuário não encontrado'
        } else {
          this.textoErro = 'Erro na comunicação com o servidor. Tente novamente mais tarde.'
        }
        this.loading = false
      },
    });
    
  }


  verificaConexao() {
    window.addEventListener("online", () => {
      alert("Your browser is working online.");
    });
    window.addEventListener("offline", () => {
      alert("Your browser is working online.");
    });
  }
}
