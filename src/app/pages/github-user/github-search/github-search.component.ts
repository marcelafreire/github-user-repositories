import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/shared/services/github/github-search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {
  userName: string;

  constructor(private githubService: GithubSearchService) { }

  ngOnInit(): void {
    this.githubService.getUser().subscribe((user) => console.log(user))
  }

}
