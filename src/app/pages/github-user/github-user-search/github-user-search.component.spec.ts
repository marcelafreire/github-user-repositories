import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { GithubSearchService } from 'src/app/shared/services/github/github-search.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { GithubUserSearchComponent } from './github-user-search.component';
import { GithubUserSpecUtils } from './github-user-spec-utils';

describe('GithubUserSearchComponent', () => {
  let component: GithubUserSearchComponent;
  let fixture: ComponentFixture<GithubUserSearchComponent>;
  let githubSearchService: GithubSearchService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserSearchComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GithubUserSearchComponent);
    component = fixture.componentInstance;
    githubSearchService = TestBed.inject(GithubSearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve obter usuário', () => {
    component.username = 'marcelafreire'
    const getuser = spyOn(githubSearchService, 'getUser').and.returnValue(of(GithubUserSpecUtils.getUser()))
    const getRepo = spyOn(githubSearchService, 'getRepositories').and.returnValue(of(GithubUserSpecUtils.getRepositories()))

    component.getUser()
    expect(getuser).toHaveBeenCalledWith('marcelafreire');
    expect(component.userInfo).toEqual(GithubUserSpecUtils.getUser());
    expect(getRepo).toHaveBeenCalledWith('url');
    expect(component.githubRepos).toEqual(GithubUserSpecUtils.getRepositories());
    expect(component.githubReposFilter).toEqual(GithubUserSpecUtils.getRepositories());
    expect(component.textoErro).toBeNull();
  });

  it('Deve retornar erro de usuário não encontrado', () => {
    component.username = 'marcelafreire'
    const error = GithubUserSpecUtils.getError()
    const getuser = spyOn(githubSearchService, 'getUser').and.returnValue(new Observable(observer=>{
      observer.error(error)
    }))

    component.getUser()
    expect(getuser).toHaveBeenCalledWith('marcelafreire');
    expect(component.textoErro).toBe('Usuário não encontrado');
  });

  it('Deve retornar erro de serviço indisponível', () => {
    component.username = 'marcelafreire'
    const error = GithubUserSpecUtils.getError()
    error.status = 500
    const getuser = spyOn(githubSearchService, 'getUser').and.returnValue(new Observable(observer=>{
      observer.error(error)
    }))

    component.getUser()
    expect(getuser).toHaveBeenCalledWith('marcelafreire');
    expect(component.textoErro).toBe('Erro na comunicação com o servidor. Tente novamente mais tarde.');
  });

  it('Deve retornar erro de serviço indisponível ao procurar repositório', () => {

    component.username = 'marcelafreire'
    const error = GithubUserSpecUtils.getError()
    const getuser = spyOn(githubSearchService, 'getUser').and.returnValue(of(GithubUserSpecUtils.getUser()))
    const getRepo = spyOn(githubSearchService, 'getRepositories').and.returnValue(new Observable(observer=>{
      observer.error(error)
    }))
    
    component.getUser()
    expect(getuser).toHaveBeenCalledWith('marcelafreire');
    expect(getRepo).toHaveBeenCalled();
    expect(component.textoErro).toBe('Erro na comunicação com o servidor. Tente novamente mais tarde.');
    expect(component.loading).toBeFalse();
  });
});
