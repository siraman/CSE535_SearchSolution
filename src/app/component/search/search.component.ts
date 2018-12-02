import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;

  captureQueryChangeEvent(event) {
    console.log(event);
    this.query = event;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
