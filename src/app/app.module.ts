import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TweetComponent} from './component/tweet/tweet.component';
import {QueryComponent} from './component/query/query.component';
import {SearchComponent} from './component/search/search.component';
import {HashtagComponent} from './component/hashtags/hashtag.component';
import {SearchResultComponent} from './component/search-result/search-result.component';
import {HomeComponent} from './component/home/home.component';
import {SearchQueryComponent} from './component/search-query/search-query.component';
import {SearchFilterComponent} from './component/search-filter/search-filter.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SearchResultItemComponent} from './component/search-result-item/search-result-item.component';
import {TweetDisplayComponent} from './component/tweet-display/tweet-display.component';
import {SearchAnalysisComponent} from './component/search-analysis/search-analysis.component';
import {SearchAnalyticsComponent} from './search-analytics/search-analytics.component';
import {ChartModule} from 'primeng/chart';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    QueryComponent,
    HashtagComponent,
    HomeComponent,
    SearchComponent,
    SearchQueryComponent,
    SearchFilterComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    TweetDisplayComponent,
    SearchAnalysisComponent,
    SearchAnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    ChartModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TweetDisplayComponent,
  ]
})
export class AppModule {
}
