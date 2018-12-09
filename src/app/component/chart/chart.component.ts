import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Tweet} from '../../model/query-result';
import {ArbitFacetFields} from '../../model/arbit_facet';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() results: Array<Array<Array<string | number>>>;
  myOptions = {
    animation: {
      duration: 3000,
      easing: 'linear',
    },
    colors: ['5D78FF'],
    is3D: true,
    'width': 600,
    height: 450,
    legend: {position: 'none'},
    bar: {groupWidth: '40%'},
    textStyle: {
      fontName: 'Helvetica',
      fontSize: '12px',
      bold: true,
      italic: true,
      // The color of the text.
      color: '#871b47',
      // The color of the text outline.
      auraColor: '#d799ae',
      // The transparency of the text.
      opacity: 0.8
    },
    hAxis: {
      textStyle: {
        color: '#3D4465FF',
        fontName: 'Arvo, Helvetica',
        fontSize: 10
      }
    },
    vAxis: {
      textStyle: {
        color: '#3D4465FF',
        fontName: 'Arvo, Helvetica',
        fontSize: 10
      }
    },

  };
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
    // this.pie_data = new Array<any>();
    // this.pie_data2 = new Array<any>();
    // console.log('modify data');
    // console.log('Check this change');

    // (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
    // 0: (2) ["Delhi", 9127]
    // 1: (2) ["New York City", 5065]
    // 2: (2) ["Mexico City", 3037]
    // 3: (2) ["Paris", 2449]
    // 4: (2) ["Bangkok", 3]
    console.log(this.results[1]);
    let city_count: any[] = [];
    let x: any[] = [];
    x = ['city', 'count'];
    city_count.push(x);
    x = ['mexico', this.results[1][2][1]];
    city_count.push(x);
    x = ['france', this.results[1][3][1]];
    city_count.push(x);
    x = ['india', this.results[1][0][1]];
    city_count.push(x);
    x = ['united states', this.results[1][1][1]];
    city_count.push(x);
    x = ['thailand', this.results[1][4][1]];
    city_count.push(x);
    console.log(city_count)
    this.data = city_count;

   return this.data;
  }
  ngOnInit() {
  }
}
