import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { GithubUserSearchComponent } from './github-user-search.component';

describe('GithubUserSearchComponent', () => {
  let component: GithubUserSearchComponent;
  let fixture: ComponentFixture<GithubUserSearchComponent>;

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
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
