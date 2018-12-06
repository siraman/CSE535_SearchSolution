import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {Tweet} from '../../model/query-result';
import {ChartComponent} from '../chart/chart.component';
import {ArbitFacetFields} from '../../model/arbit_facet';
import {FacetInput} from '../../query/facets/facet-input';
import {SolrService} from '../../service/solr/solr.service';

@Component({
  selector: 'app-search-analysis',
  templateUrl: './search-analysis.component.html',
  styleUrls: ['./search-analysis.component.css']
})
export class SearchAnalysisComponent implements OnInit, OnChanges {
  @Input() public facetInput: FacetInput;

  arbitFacetFields: ArbitFacetFields;

  constructor(private solrService: SolrService) {
    console.log('inside search analysis');
  }

  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('facetInput')) {
      this.facetInput = changes['facetInput'].currentValue;
      if (this.facetInput != null) {
        this.solrService.getFacetCountsForQueryResult(this.facetInput.query, this.facetInput.queryObj, this.facetInput.filterQuery)
          .subscribe(arbitFacet => {
            if (arbitFacet.response != null) {
              this.arbitFacetFields = arbitFacet.facet_counts.facet_fields;
              console.log(this.arbitFacetFields);
            }
          }, error1 => {
            // TODO: Handle error case.
          });
      }
    }
  }
}
