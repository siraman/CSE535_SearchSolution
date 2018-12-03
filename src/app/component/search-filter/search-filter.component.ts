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
  filterInputModelListOfCity: FilterInputModel[] = [];
  filterInputModelListOfLanguage: FilterInputModel[] = [];
  filterInputModelListOfTopic: FilterInputModel[] = [];

  filtersEventObjectList: FilterInputModel[] = [];

  @Output() filtersEvent: EventEmitter<FilterInputModel[]> = new EventEmitter<FilterInputModel[]>();
  @Output() clearEvent: EventEmitter<string> = new EventEmitter<string>();

  bsConfig: Partial<BsDatepickerConfig>;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  daterangepickerModel: Date[];
  clearDate: string;
  constructor() {
    this.bsConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'yyyy-mm-ddThh:mm:ssZ'
      });
    this.maxDate.setDate(this.maxDate.getDate());
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.clearDate = 'Select a date';
  }

  ngOnInit() {
    this.filterInputModelListOfCity = FilterInputModelGenerator.getListOfInputModels(FilterType.FILTER_TYPE_CITY);
    this.filterInputModelListOfLanguage = FilterInputModelGenerator.getListOfInputModels(FilterType.FILTER_TYPE_LANGUAGE);
    this.filterInputModelListOfTopic = FilterInputModelGenerator.getListOfInputModels(FilterType.FILTER_TYPE_TOPIC);
  }

  selectNewCity(city: FilterInputModel) {
    let isAlreadySelected: Boolean = false;
    this.filtersEventObjectList.forEach(filtersEventObject => {
      if (filtersEventObject != null && filtersEventObject.filter_type === FilterType.FILTER_TYPE_CITY) {
        filtersEventObject.code = city.code;
        filtersEventObject.display = city.display;
        this.filtersEvent.emit(this.filtersEventObjectList);
        this.selectedCity = city;
        isAlreadySelected = true;
        return;
      }
    });
    if (!isAlreadySelected) {
      this.filtersEventObjectList.push(new FilterInputModel(city.display, city.code, city.filter_type));
      this.filtersEvent.emit(this.filtersEventObjectList);
      this.selectedCity = city;
      return;
    }

  }

  selectNewLanguage(language: FilterInputModel) {
    let isAlreadySelected: Boolean = false;
    this.filtersEventObjectList.forEach(filtersEventObject => {
      if (filtersEventObject != null && filtersEventObject.filter_type === FilterType.FILTER_TYPE_LANGUAGE) {
        filtersEventObject.code = language.code;
        filtersEventObject.display = language.display;
        this.filtersEvent.emit(this.filtersEventObjectList);
        this.selectedLanguage = language;
        isAlreadySelected = true;
        return;
      }
    });
    if (!isAlreadySelected) {
      this.filtersEventObjectList.push(new FilterInputModel(language.display, language.code, language.filter_type));
      this.filtersEvent.emit(this.filtersEventObjectList);
      this.selectedLanguage = language;
      return;
    }
  }

  selectNewTopic(topic: FilterInputModel) {
    let isAlreadySelected: Boolean = false;
    this.filtersEventObjectList.forEach(filtersEventObject => {
      if (filtersEventObject != null && filtersEventObject.filter_type === FilterType.FILTER_TYPE_TOPIC) {
        filtersEventObject.code = topic.code;
        filtersEventObject.display = topic.display;
        this.filtersEvent.emit(this.filtersEventObjectList);
        this.selectedTopic = topic;
        isAlreadySelected = true;
        return;
      }
    });
    if (!isAlreadySelected) {
      this.filtersEventObjectList.push(new FilterInputModel(topic.display, topic.code, topic.filter_type));
      this.filtersEvent.emit(this.filtersEventObjectList);
      this.selectedTopic = topic;
      return;
    }
  }

  clearText(value) {
    const filtersLength = this.filtersEventObjectList.length;
    let selectedIndex = -1;
    if (value === 'topic') {
      this.selectedTopic = null;
      for (let index = 0; index < filtersLength; index++) {
        if (this.filtersEventObjectList[index] != null
          && this.filtersEventObjectList[index].filter_type === FilterType.FILTER_TYPE_TOPIC) {
          selectedIndex = index;
          break;
        }
      }
    }

    if (value === 'city') {
      this.selectedCity = null;
      for (let index = 0; index < filtersLength; index++) {
        if (this.filtersEventObjectList[index] != null
          && this.filtersEventObjectList[index].filter_type === FilterType.FILTER_TYPE_CITY) {
          selectedIndex = index;
          break;
        }
      }
    }
    if (value === 'language') {
      this.selectedLanguage = null;
      for (let index = 0; index < filtersLength; index++) {
        if (this.filtersEventObjectList[index] != null
          && this.filtersEventObjectList[index].filter_type === FilterType.FILTER_TYPE_LANGUAGE) {
          selectedIndex = index;
          break;
        }
      }
    }
    if (value === 'date') {
      this.clearDate.concat('Select a date');
      for (let index = 0; index < filtersLength; index++) {
        if (this.filtersEventObjectList[index] != null
          && this.filtersEventObjectList[index].filter_type === FilterType.FILTER_TYPE_DATE_RANGE) {
          selectedIndex = index;
          break;
        }
      }
    }
    if (value === 'all') {
      this.clearDate = ' ';
      this.selectedLanguage = null;
      this.selectedCity = null;
      this.selectedTopic = null;
      this.filtersEventObjectList = [];
      this.filtersEvent.emit(this.filtersEventObjectList);
    }
    if (selectedIndex > -1) {
      this.filtersEventObjectList[selectedIndex] = null;
      this.filtersEvent.emit(this.filtersEventObjectList);
    }
  }
}
