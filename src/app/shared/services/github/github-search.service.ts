import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, concat, map, observable, Observable, of, Subject, tap } from "rxjs";
import { GithubUser } from "../../models/githubuser.model";
import { GithubRepos } from "../../models/githubrepos.model";

@Injectable({
  providedIn: "root",
})
export class GithubSearchService {
  constructor(private httpCliente: HttpClient) {}

  userInfos$ = new Observable<any>();

  getUser(username: string): Observable<GithubUser> {
    const user = JSON.parse(sessionStorage.getItem('userinfos') || '{}');
    console.log(user)
    if (user && Object.keys(user).length !== 0) {
      return of(user)
    } else {
        return this.httpCliente
        // .get<GithubUser>(`https://api.github.com/users/${username}`)
        .get<GithubUser>(`https://api.github.com/users/marcelafreire`)
        .pipe(map((infos) => {
          this.userInfos$ = of(infos)
          sessionStorage.setItem('userinfos', JSON.stringify(infos))
          return infos
        }))
      }
  }
  // getRepositories(url: string) {
  //   const repos = this.httpCliente
  //     .get(url).pipe(tap((dados) => {return dados}))
  //     return concat(repos, this.userInfos$)
  // }

  getRepositories(url: string): Observable<GithubRepos[]> {
   return this.httpCliente.get<GithubRepos[]>(url)
  }
}
