import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { GithubUserSpecUtils } from '../github-user-search/github-user-spec-utils';

import { UserInfosComponent } from './user-infos.component';

describe('UserInfosComponent', () => {
  let component: UserInfosComponent;
  let fixture: ComponentFixture<UserInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfosComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(UserInfosComponent);
    component = fixture.componentInstance;
  });



  it('Deve ordernar repositórios por ordem alfabética', () => {
    const repos = GithubUserSpecUtils.getRepositories()
    const sort = GithubUserSpecUtils.getReposSortName()
    component.userInfo = GithubUserSpecUtils.getUser();
    component.githubRepos = repos
    component.orderRepos('name')
    expect(component.githubReposFilter).toEqual(sort);
  });

  it('Deve ordernar repositórios por estrelas', () => {
    const repos = GithubUserSpecUtils.getRepositories();
    const sort = GithubUserSpecUtils.getReposSortStars();
    component.userInfo = GithubUserSpecUtils.getUser();
    component.githubRepos = repos
    component.orderRepos('stars')
    expect(component.githubReposFilter).toEqual(sort);
  });

  it('Deve filtrar por nome de repositório', () => {
    const repos = GithubUserSpecUtils.getRepositories();
    component.userInfo = GithubUserSpecUtils.getUser();
    component.githubRepos = repos
    component.repoName = 'new'
    component.searchRepoByName()
    expect(component.githubReposFilter).toEqual([repos[2]]);
  });

  it('Deve filtrar por quantidade de estrelas', () => {
    const repos = GithubUserSpecUtils.getRepositories();
    component.userInfo = GithubUserSpecUtils.getUser();
    component.githubRepos = repos
    component.repStars = 4
    component.searchRepoByStars()
    expect(component.githubReposFilter).toEqual([repos[1]]);
  });
});
