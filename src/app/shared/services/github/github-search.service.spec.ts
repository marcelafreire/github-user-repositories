import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { GithubUserSpecUtils } from "src/app/pages/github-user/github-user-search/github-user-spec-utils";

import { GithubSearchService } from "./github-search.service";

describe("GithubSearchService", () => {
  let service: GithubSearchService;
  let httpClientService: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubSearchService);
    httpClientService = TestBed.inject(HttpClient);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("Deve obter usuário sem sessão", () => {
    const httpService = spyOn(httpClientService, "get").and.returnValue(
      of(GithubUserSpecUtils.getUser())
    );

    service.getUser("marcelafreire").subscribe();
    expect(httpService).toHaveBeenCalledWith(
      "https://api.github.com/users/marcelafreire"
    );
  });

  it("Deve obter repositórios", () => {
    const httpService = spyOn(httpClientService, "get").and.returnValue(
      of(GithubUserSpecUtils.getRepositories())
    );

    service.getRepositories("url");
    expect(httpService).toHaveBeenCalledWith("url");
  });
});
