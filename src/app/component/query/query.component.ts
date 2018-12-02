import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  today: number;
  query: string;

  constructor(private router: Router) {
  }
  performSearch(query) {
    return this.router.navigate(['/search'], {queryParams: {query: query}});
  }

  ngOnInit() {
    this.today = Date.now();
  }
}
