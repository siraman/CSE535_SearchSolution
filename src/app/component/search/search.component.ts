import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;

  captureQueryChangeEvent(event) {
    this.query = event;
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.query =  this.activatedRoute.snapshot.queryParams['query'];
  }

}
