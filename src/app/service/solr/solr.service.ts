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

    return this.httpClient.get<HashtagFacet>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, options);
  }

  getSearchResults(query, pageNumber, pageSize, queryObj: Query, filterQuery?: FilterInputModel[]): Observable<QueryResponse> {
    const start = (pageNumber - 1) * (pageSize);
    const queryParameters = {
      params: new HttpParams()
    };
    if (query) {
      queryParameters.params = queryParameters.params.append('start', start.toString())
        .append('rows', pageSize.toString())
        .append('q', query);
    }
    if (filterQuery != null) {
      filterQuery.forEach(value => {
        switch (value.filter_type) {
          case FilterType.FILTER_TYPE_CITY:
            queryParameters.params = queryParameters.params.append(ApplicationConstants.FOCUS_AREA_CITY, value.code);
            break;
          case FilterType.FILTER_TYPE_LANGUAGE:
            queryParameters.params = queryParameters.params.append(ApplicationConstants.FOCUS_AREA_LANGUAGE, value.code);
            break;
          case FilterType.FILTER_TYPE_TOPIC:
            queryParameters.params = queryParameters.params.append(ApplicationConstants.FOCUS_AREA_TOPIC, value.code);
            break;
          default:
            break;
          // case FilterType.FILTER_TYPE_DATE_RANGE:
          //   queryParameters.params.set(ApplicationConstants.Focus_Area_)
        }
      });
    }
    if (queryObj != null) {
      console.log(queryObj);
      queryParameters.params = queryParameters.params.append('start', start.toString())
        .append('rows', pageSize.toString())
        .append('q', queryObj.focusArea + ':' + queryObj.key + ',' + 'entities.hashtags.text:' + queryObj.value);
    }
    return this.httpClient.get<QueryResponse>(SolrUrlConstants.SOLR_BASE_URL + SolrUrlConstants.SOLR_SEARCH_URL, queryParameters);
  }
}
