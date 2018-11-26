import {Component, Input, OnInit} from '@angular/core';
import {SolrService} from '../../service/solr/solr.service';
import {HashtagFacetFields} from '../../model/hashtag-facet';
import {HashtagFacetInputModel} from '../../query/hashtag-facet/hashtag-facet-input-model';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  @Input() hashtagFacetInputModel: HashtagFacetInputModel;

  hashtagFacetFields: HashtagFacetFields;

  constructor(private solrService: SolrService) {
  }

  ngOnInit() {
    this.getHashtagCounts();
  }

  getHashtagCounts(): void {
    this.solrService.getFacetCountsForHashtags(this.hashtagFacetInputModel.focus_area, this.hashtagFacetInputModel.value)
      .subscribe(hashtagFacet => this.hashtagFacetFields = hashtagFacet.facet_counts.facet_fields, error1 => {
        // TODO: Implement the error state.
      });
  }
}
