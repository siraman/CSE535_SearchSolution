import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {SolrService} from '../../service/solr/solr.service';
import {Tweet} from '../../model/query-result';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy, OnChanges {
  @Input() query: string;
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

  getTweets(query, pageNumber, pageSize) {
    this.searched = true;
    this.searchResults.getSearchResults(query, pageNumber, pageSize).subscribe(tweet => {
      if (tweet.response != null) {
        this.results = tweet.response.docs;
        tweet.response.docs.forEach(tweet1 => {
          if (tweet1.entities != null) {
            console.log('Found entities');
          }
        });
        this.totalTweets = tweet.response.numFound;
        this.currentPage = pageNumber;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        const curVal = JSON.stringify(change.currentValue);
        if (propName === 'query') {
          this.getTweets(curVal, 1, this.pageSize);
        }
      }
    }
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
