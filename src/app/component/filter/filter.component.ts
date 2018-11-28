import {Component, OnInit} from '@angular/core';
import {FilterInputModel} from '../../query/filters/filter-input-model';
import {FilterInputModelGenerator} from '../../query/filters/filter-input-model-generator';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedLanguage = '';
  selectedCity = '';
  selectedTopic = '';
  event_value = '';
  filterInputModelListOfCity: FilterInputModel[] = [];
  filterInputModelListOfLanguage: FilterInputModel[] = [];
  filterInputModelListOfTopic: FilterInputModel[] = [];
  constructor() {
  }

  ngOnInit() {
    this.filterInputModelListOfCity = FilterInputModelGenerator.getListOfInputModels('city');
    this.filterInputModelListOfLanguage = FilterInputModelGenerator.getListOfInputModels('language');
    this.filterInputModelListOfTopic = FilterInputModelGenerator.getListOfInputModels('topic');
  }

  selectChangeHandlerLanguage(event: any) {
    this.event_value = event.target.value;
    if (this.event_value === 'English') {
      this.selectedLanguage = 'en';
    }
    if (this.event_value === 'Hindi') {
      this.selectedLanguage = 'hi';
    }
    if (this.event_value === 'French') {
      this.selectedLanguage = 'fr';
    }
    if (this.event_value === 'Thai') {
      this.selectedLanguage = 'th';
    }
    if (this.event_value === 'Spanish') {
      this.selectedLanguage = 'es';
    }
  }

  selectChangeHandlerTopic(event: any) {
    this.selectedTopic = event.target.value;
  }

  selectChangeHandlerCity(event: any) {
    this.event_value = event.target.value;
    if (this.event_value === 'New York City') {
      this.selectedCity = 'nyc';
    }
    if (this.event_value === 'Delhi') {
      this.selectedCity = 'delhi';
    }
    if (this.event_value === 'Paris') {
      this.selectedCity = 'paris';
    }
    if (this.event_value === 'Bangkok') {
      this.selectedCity = 'bangkok';
    }
    if (this.event_value === 'Mexico City') {
      this.selectedCity = 'mexico city';
    }
  }
}
