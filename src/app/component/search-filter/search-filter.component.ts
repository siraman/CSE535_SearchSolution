import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterInputModel} from '../../query/filters/filter-input-model';
import {FilterInputModelGenerator} from '../../query/filters/filter-input-model-generator';
import {FilterType} from '../../query/filters/filter-type';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  selectedLanguage: FilterInputModel;
  selectedCity: FilterInputModel;
  selectedTopic: FilterInputModel;
  event_value = '';
  filterInputModelListOfCity: FilterInputModel[] = [];
  filterInputModelListOfLanguage: FilterInputModel[] = [];
  filterInputModelListOfTopic: FilterInputModel[] = [];

  filtersEventObjectList: FilterInputModel[] = [];

  @Output() filtersEvent: EventEmitter<FilterInputModel[]> = new EventEmitter<FilterInputModel[]>();

  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  // maxDate: Date;
  constructor() {
    this.bsConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'yyyy-mm-ddThh:mm:ssZ'
      });
    // this.maxDate = new Date();
    // this.maxDate.setDate(this.maxDate.getDate());
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit() {
    this.filterInputModelListOfCity = FilterInputModelGenerator.getListOfInputModels(FilterType.FILTER_TYPE_CITY);
    this.filterInputModelListOfLanguage = FilterInputModelGenerator.getListOfInputModels(FilterType.FILTER_TYPE_LANGUAGE);
    this.filterInputModelListOfTopic = FilterInputModelGenerator.getListOfInputModels(FilterType.FILTER_TYPE_TOPIC);
  }

  selectNewCity(city: FilterInputModel) {
    console.log(city.display);
    this.filtersEventObjectList.forEach(filtersEventObject => {
      if (filtersEventObject.filter_type === FilterType.FILTER_TYPE_CITY) {
        filtersEventObject.code = city.code;
        filtersEventObject.display = city.display;
        this.filtersEvent.emit(this.filtersEventObjectList);
        this.selectedCity = city;
        return;
      }
    });
  }

  selectNewLanguage(language: FilterInputModel) {
    console.log(language.display);
    this.filtersEventObjectList.forEach(filtersEventObject => {
      if (filtersEventObject.filter_type === FilterType.FILTER_TYPE_LANGUAGE) {
        filtersEventObject.code = language.code;
        filtersEventObject.display = language.display;
        this.filtersEvent.emit(this.filtersEventObjectList);
        this.selectedLanguage = language;
        return;
      }
    });
  }

  selectNewTopic(topic: FilterInputModel) {
    console.log(topic.display);
    this.filtersEventObjectList.forEach(filtersEventObject => {
      if (filtersEventObject.filter_type === FilterType.FILTER_TYPE_TOPIC) {
        filtersEventObject.code = topic.code;
        filtersEventObject.display = topic.display;
        this.filtersEvent.emit(this.filtersEventObjectList);
        this.selectedTopic = topic;
        return;
      }
    });
  }
}
