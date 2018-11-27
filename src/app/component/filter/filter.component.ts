import {Component, OnInit} from '@angular/core';
import {ApplicationConstants} from '../../util/application-constants';
import {FilterInputModel} from '../../query/filters/filter-input-model';
import {FilterInputModelGenerator} from '../../query/filters/filter-input-model-generator';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  // languages: string[] = [];
  // cities: string[] = [];
  // topics: string[] = [];
  // date: string[] = [];
  filterInputModelListofCity: FilterInputModel[] = [];
  filterInputModelListofLanguage: FilterInputModel[] = [];
  filterInputModelListofTopic: FilterInputModel[] = [];
  constructor() {
  }

  ngOnInit() {
    this.filterInputModelListofCity = FilterInputModelGenerator.getListOfInputModels('city');
    this.filterInputModelListofLanguage = FilterInputModelGenerator.getListOfInputModels('language');
    this.filterInputModelListofTopic = FilterInputModelGenerator.getListOfInputModels('topic');
  }
}
