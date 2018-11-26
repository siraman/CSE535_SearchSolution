import { Component, OnInit } from '@angular/core';
import {HashtagFacetInputModel} from '../../query/hashtag-facet/hashtag-facet-input-model';
import {HashtagFacetInputModelGenerator} from '../../query/hashtag-facet/hashtag-facet-input-model-generator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'IR Project 4';
  hashtagFacetInputModelList: HashtagFacetInputModel[];

  constructor() { }

  ngOnInit() {
    this.hashtagFacetInputModelList = HashtagFacetInputModelGenerator.getListOfInputModels();

  }

}
