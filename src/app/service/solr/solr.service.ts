import {Injectable} from '@angular/core';
import {HashtagFacet, HashtagFacetFields} from '../../model/hashtag-facet';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SolrUrlConstants} from '../../util/url-constants';

@Injectable({
  providedIn: 'root'
})
export class SolrService {

  constructor(private httpClient: HttpClient) {
  }

  getFacetCountsForHashtags(key: String, value: String): Observable<HashtagFacet> {
    value = value.trim();
    const options = value ?
      {
        params: new HttpParams().set('name', value.valueOf()).set('facet.field', 'hashtags').set('facet', 'on')
          .set('fq', key + ':' + value).set('indent', 'on').set('q', '*:*').set('rows', '0').set('wt', 'json')
          .set('json.nl', 'map').set('facet.limit', '15')
      } : {};

    return this.httpClient.get<HashtagFacet>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, options)
  }
}
