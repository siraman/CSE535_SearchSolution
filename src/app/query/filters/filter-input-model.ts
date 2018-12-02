import {FilterType} from './filter-type';

export class FilterInputModel {
  display: string;
  code: string;
  filter_type: FilterType;

  constructor(display: string, code: string, filter_type: FilterType) {
    this.display = display;
    this.code = code;
    this.filter_type = filter_type;
  }
}
