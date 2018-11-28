import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {SearchResultComponent} from './component/search-result/search-result.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
  {path: 'search-result-results', component: SearchResultComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
