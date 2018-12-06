import {Injectable} from '@angular/core';
import {HashtagFacet} from '../../model/hashtag-facet';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SolrUrlConstants} from '../../util/url-constants';
import {QueryResponse} from '../../model/query-result';
import {Query} from '../../model/query';
import {FilterInputModel} from '../../query/filters/filter-input-model';
import {FilterType} from '../../query/filters/filter-type';
import {ApplicationConstants} from '../../util/application-constants';
import {isNullOrUndefined} from 'util';
import {ArbitFacet} from '../../model/arbit_facet';
import {EnumValue} from '@angular/compiler-cli/src/ngtsc/metadata';
import {QueryUtil} from '../../util/query-util';
import {SearchInputModel} from '../../query/search/search-input-model';

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
          .set('fq', key + ':' + value).set('q', '*:*').set('rows', '0').set('wt', 'json')
          .set('json.nl', 'map').set('facet.limit', '15')
      } : {};
    console.log(options['params'].toString());
    return this.httpClient.get<HashtagFacet>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, options);
  }

  getFacetCounts(query, value, filterQuery?: FilterInputModel[]): Observable<ArbitFacet> {
    const options = {
      params: new HttpParams().set('facet.field', value).set('facet.field', value).set('facet.field', value).set('facet', 'on')
        .set('q', query).set('rows', '0').set('wt', 'json')
    };
    return this.httpClient.get<ArbitFacet>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, options);
  }

  getFacetCountsForQueryResult(query, queryObj: Query, filterQuery?: FilterInputModel[]): Observable<ArbitFacet> {
    let queryParameters = QueryUtil.getQueryParamsForSearch(query, queryObj, null, null, filterQuery);
    const queryParams1 = queryParameters.params.set('facet.field', 'queryMetadata_query_city')
      .append('facet.field', 'queryMetadata_query_topic')
      .append('facet.field', 'queryMetadata_query_language').set('facet', 'on').set('rows', '0').set('wt', 'json')
      .set('json.nl', 'map');
    return this.httpClient.get<ArbitFacet>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, queryParameters);
  }

  getSearchResults(query, pageNumber, pageSize, queryObj: Query, filterQuery?: FilterInputModel[]): Observable<QueryResponse> {
    let queryParameters = QueryUtil.getQueryParamsForSearch(query, queryObj, pageNumber, pageSize, filterQuery);
    console.log(queryParameters);
    if (!isNullOrUndefined(query) || !isNullOrUndefined(queryObj) || !isNullOrUndefined(filterQuery)) {
      return this.httpClient.get<QueryResponse>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, queryParameters);
    }
    return new Observable<QueryResponse>();
  }
}
