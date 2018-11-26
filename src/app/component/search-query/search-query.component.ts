import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {

  @Input() query: string;

  constructor(private router: Router) {
  }

  performSearch(query) {
    return this.router.navigate(['/search-results'], {queryParams: {query: query}});
  }

  ngOnInit() {
  }

}
