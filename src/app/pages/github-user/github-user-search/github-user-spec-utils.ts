import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { GithubRepos } from "src/app/shared/models/githubrepos.model";
import { GithubUser } from "src/app/shared/models/githubuser.model";

export class GithubUserSpecUtils {
  static getUser(): GithubUser {
    return {
      name: "Marcela",
      login: "marcelafreire",
      avatar_url: "avatar_url",
      bio: "bio",
      followers: 10,
      following: 11,
      location: "",
      public_repos: 10,
      repos_url: "url",
    };
  }

  static getRepositories(): GithubRepos[] {
    return [
      {
        name: "repo",
        language: "html",
        description: "repo description",
        updated_at: new Date(2021, 1, 1),
        stargazers_count: 2,
      },
      {
        name: "github-repo",
        language: "javascript",
        description: "description",
        updated_at: new Date(2021, 5, 1),
        stargazers_count: 4,
      },
      {
        name: "new-repo",
        language: "html",
        description: "description",
        updated_at: new Date(2021, 5, 1),
        stargazers_count: 6,
      },
    ];
  }

  static getReposSortName(): GithubRepos[] {
    return [
      {
        name: "github-repo",
        language: "javascript",
        description: "description",
        updated_at: new Date(2021, 5, 1),
        stargazers_count: 4,
      },
      {
        name: "new-repo",
        language: "html",
        description: "description",
        updated_at: new Date(2021, 5, 1),
        stargazers_count: 6,
      },
      {
        name: "repo",
        language: "html",
        description: "repo description",
        updated_at: new Date(2021, 1, 1),
        stargazers_count: 2,
      },
    ];
  }

  static getReposSortStars(): GithubRepos[] {
    return [
      {
        name: "repo",
        language: "html",
        description: "repo description",
        updated_at: new Date(2021, 1, 1),
        stargazers_count: 2,
      },
      {
        name: "github-repo",
        language: "javascript",
        description: "description",
        updated_at: new Date(2021, 5, 1),
        stargazers_count: 4,
      },
      {
        name: "new-repo",
        language: "html",
        description: "description",
        updated_at: new Date(2021, 5, 1),
        stargazers_count: 6,
      },
    ];
  }

 static getError() {
    return {
      error: {message: 'Not Found', documentation_url: 'https://docs.github.com/rest/reference/users#get-a-user'},
      message: "Http failure response for https://api.github.com/users/xincolenjdbf: 404 OK",
      name: "HttpErrorResponse",
      ok: false,
      status: 404,
      statusText: "OK",
      url: "https://api.github.com/users/xincolenjdbf",
    }
  }
}
