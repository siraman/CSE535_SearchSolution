import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  today: number;
  @Input() query: string;

  constructor(private router: Router) {
  }
  performSearch(query) {
    return this.router.navigate(['/search-results'], {queryParams: {query: query}});
  }

  ngOnInit() {
    this.today = Date.now();
  }
}
