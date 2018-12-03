import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilterInputModel} from '../../query/filters/filter-input-model';
import {forEach} from '@angular/router/src/utils/collection';

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

  performFilterSearch(event: FilterInputModel[]) {
    const newFilterModel: FilterInputModel[] = [];
    event.forEach(value => {
      newFilterModel.push(value);
    });
    this.filterQuery = newFilterModel;
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.query =  this.activatedRoute.snapshot.queryParams['query'];
  }

}
