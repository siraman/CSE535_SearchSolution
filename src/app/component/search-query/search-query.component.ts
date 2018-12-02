import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-query',
  templateUrl: './search-query.component.html',
  styleUrls: ['./search-query.component.css']
})
export class SearchQueryComponent implements OnInit {

  @Input() searchPageQuery: string;
  @Output() queryChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  performSearch(query) {
    this.searchPageQuery = query;
    this.queryChange.emit(query);
  }

  ngOnInit() {
  }
}
