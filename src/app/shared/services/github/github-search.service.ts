import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { GithubUser } from "../../models/githubuser.model";
import { GithubRepos } from "../../models/githubrepos.model";

@Injectable({
  providedIn: "root",
})
export class GithubSearchService {
  constructor(private httpCliente: HttpClient) {}

  getUser(username: string): Observable<GithubUser> {
        return this.httpCliente
        .get<GithubUser>(`https://api.github.com/users/${username}`)
        .pipe(map((infos) => {
          return infos
        }))
  }

  getRepositories(url: string): Observable<GithubRepos[]> {
   return this.httpCliente.get<GithubRepos[]>(url)
  }
}
