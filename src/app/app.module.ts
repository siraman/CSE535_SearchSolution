import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TweetComponent} from './component/tweet/tweet.component';
import {QueryComponent} from './component/query/query.component';
import {HashtagComponent} from './component/hashtags/hashtag.component';
import {SearchResultComponent} from './component/search-result/search-result.component';
import {HomeComponent} from './component/home/home.component';
import {SearchQueryComponent} from './component/search-query/search-query.component';
import {SearchFilterComponent} from './component/search-filter/search-filter.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SearchResultItemComponent } from './component/search-result-item/search-result-item.component';
import { TweetDisplayComponent } from './component/tweet-display/tweet-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    QueryComponent,
    HashtagComponent,
    SearchResultComponent,
    HomeComponent,
    SearchQueryComponent,
    SearchFilterComponent,
    SearchResultItemComponent,
    TweetDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
