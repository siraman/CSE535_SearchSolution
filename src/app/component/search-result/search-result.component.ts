import {Component, OnDestroy, OnInit} from '@angular/core';
import {SolrService} from '../../service/solr/solr.service';
import {Tweet} from '../../model/query-result';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  query: string;
  results: Tweet[];
  pageSize = 10;
  totalTweets = 0;
  currentPage = 1;
  searched = false;
  test = '';

  constructor(private searchResults: SolrService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationService: Location) {
  }

  captureEvent(event) {
    this.query = event;
    this.getTweets(event, 1, this.pageSize);
  }

  getTweets(query, pageNumber, pageSize) {
    this.searched = true;
    this.searchResults.getSearchResults(query, pageNumber, pageSize).subscribe(tweet => {
      if (tweet.response != null) {
        this.results = tweet.response.docs;
        this.totalTweets = tweet.response.numFound;
        this.currentPage = pageNumber;
      }
    });
  }

  getPage(pageNumber: number) {
    this.getTweets(this.query, pageNumber, this.pageSize);
  }

  onSearch(query: string): void {
    this.getTweets(query, 1, this.pageSize);
  }



  ngOnInit() {
    const searchQuery = this.activatedRoute.snapshot.queryParams['query'];
    this.query = searchQuery;
    this.locationService.replaceState(this.locationService.path());
    if (searchQuery) {
      this.getTweets(searchQuery, 1, this.pageSize);
      return this.router.navigate(['/search-result-results']);
    }
  }

  ngOnDestroy() {
  }
}
