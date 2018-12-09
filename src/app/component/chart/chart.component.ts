import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Tweet} from '../../model/query-result';
import {ArbitFacetFields} from '../../model/arbit_facet';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() results: ArbitFacetFields[];
  public data: any;
  public pie_data: any;
  public pie_data2: any;
  public pie_ChartOptions_1 = {
    title: '% of tweets per topic in NYC',
    width: 900,
    height: 500
  };
  public pie_ChartOptions_2 = {
    title: '% of tweets per topic in Delhi',
    width: 900,
    height: 500
  };
  public map_ChartOptions = {chatArea: {width: 900, height: 500}};
  public bar_ChartOptions = {
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
      textStyle: {
        bold: true,
        fontSize: 12,
        color: '#4d4d4d'
      },
      titleTextStyle: {
        bold: true,
        fontSize: 18,
        color: '#4d4d4d'
      }
    },
    vAxis: {
      title: 'City',
      textStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      },
      titleTextStyle: {
        fontSize: 14,
        bold: true,
        color: '#848484'
      }
    }
  };
  constructor() {
  }
  ngOnChanges() {
    this.pie_data = new Array<any>();
    this.pie_data2 = new Array<any>();
    console.log('modify data');
    console.log(this.results);
    // interface HashMap extends Array<any> {
    //   [index]: ;
    // }
    // interface FinalMap extends Array<HashMap> {
    //   [index: number]: HashMap;
    // }
    // let city_count : FinalMap = [];
    // let map: HashMap = {city: 'City', count: 'Count'};
    // city_count.push(map);
    // let count = 1;
    // console.log(city_count);
    // let mexico_city: HashMap = {'city': 'mexico city', 'count': 0};
    // city_count.push(mexico_city);
    // let nyc: HashMap = {'city': 'nyc', 'count': 0};
    // city_count.push(nyc);
    // let bangkok: HashMap = {'city': 'bangkok', 'count': 0};
    // city_count.push(bangkok);
    // let paris: HashMap = {'city': 'paris', 'count': 0};
    // city_count.push(paris);
    // let delhi: HashMap = {'city': 'delhi', 'count': 0};
    // city_count.push(delhi);
    // for (let tweet of this.facetInput) {
    //   console.log(tweet);
    //   console.log(tweet['queryMetadata.query_city']);
    //   for (let city of tweet['queryMetadata.query_city']) {
    //     console.log(typeof city);
    //     for (let x of city_count) {
    //       if (x['city'] === city) {
    //         x['count'] = x['count'] + 1;
    //       }
    //     }
    //   }
    //   count = count + 1;
    // }
    let city_count: any[] = [];
    let x: any[] = [];
    x = ['city', 'count'];
    city_count.push(x);
    // x = ['mexico', 0];
    // city_count.push(x);
    // for (let tweet of this.facetInput) {
    //   for (let city of tweet['queryMetadata.query_city']) {
    //     for (let y of city_count) {
    //       console.log(y[0]);
    //       console.log(city);
    //       city = city.replace(' city', '');
    //       if (y[0] === city) {
    //         console.log(y[0]);
    //         y[1] = y[1] + 1;
    //       }
    //     }
    //   }
    // }
    console.log(this.results[0]);
    x = ['mexico', this.results[0]['queryMetadata.query_city'][5]];
    city_count.push(x);
    x = ['france', this.results[0]['queryMetadata.query_city'][7]];
    city_count.push(x);
    x = ['india', this.results[0]['queryMetadata.query_city'][9]];
    city_count.push(x);
    x = ['united states', this.results[0]['queryMetadata.query_city'][1]];
    city_count.push(x);
    x = ['thailand', this.results[0]['queryMetadata.query_city'][11]];
    city_count.push(x);
    console.log(this.results[0]['queryMetadata.query_city']);
    this.data = city_count;
    console.log(city_count);
    console.log(this.pie_data)
    this.pie_data.push(['Topic', 'No of tweets']);
    this.pie_data.push(['crime', this.results[1]['queryMetadata.query_topic'][1]]);
    this.pie_data.push(['environment', this.results[1]['queryMetadata.query_topic'][3]]);
    this.pie_data.push(['social unrest', this.results[1]['queryMetadata.query_topic'][5]]);
    this.pie_data.push(['politics', this.results[1]['queryMetadata.query_topic'][9]]);
    this.pie_data.push(['infra', this.results[1]['queryMetadata.query_topic'][11]]);
    console.log(this.pie_data);
    this.pie_data2.push(['Topic', 'No of tweets']);
    this.pie_data2.push(['crime', this.results[2]['queryMetadata.query_topic'][1]]);
    this.pie_data2.push(['environment', this.results[2]['queryMetadata.query_topic'][3]]);
    this.pie_data2.push(['social unrest', this.results[2]['queryMetadata.query_topic'][5]]);
    this.pie_data2.push(['politics', this.results[2]['queryMetadata.query_topic'][9]]);
    this.pie_data2.push(['infra', this.results[2]['queryMetadata.query_topic'][11]]);
  return this.data;
  }
  ngOnInit() {
  }
}
