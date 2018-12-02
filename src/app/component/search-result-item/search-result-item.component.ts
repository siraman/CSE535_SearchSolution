import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../model/query-result';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {

  @Input() tweet: Tweet;

  onItemClick() {
  }

  constructor() { }

  ngOnInit() {
  }

}
