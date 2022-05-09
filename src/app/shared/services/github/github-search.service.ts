import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor(private httpCliente: HttpClient) { }

  getUser() {
    return this.httpCliente.get('https://api.github.com/users/defunkt')
  }
}
