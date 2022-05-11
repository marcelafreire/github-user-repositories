import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/shared/services/github/github-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  username: string;

  constructor(private githubService: GithubSearchService) { }

  ngOnInit(): void {
  }

  getUser() {
    this.githubService.getUser(this.username).subscribe((user) => console.log(user))
  }
}
