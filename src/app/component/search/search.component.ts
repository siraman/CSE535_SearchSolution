import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilterInputModel} from '../../query/filters/filter-input-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  filterQuery: FilterInputModel[];

  captureQueryChangeEvent(event) {
    this.query = event;
  }

  performFilterSearch(event) {
    this.filterQuery = event;
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.query =  this.activatedRoute.snapshot.queryParams['query'];
  }

}
