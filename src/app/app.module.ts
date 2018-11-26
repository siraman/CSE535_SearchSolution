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
import {SearchComponent} from './component/search/search.component';
import {HomeComponent} from './component/home/home.component';
import {SearchQueryComponent} from './component/search-query/search-query.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    QueryComponent,
    HashtagComponent,
    SearchComponent,
    HomeComponent,
    SearchQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
