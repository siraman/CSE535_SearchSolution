import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../model/query-result';
@Component({
  selector: 'app-tweet-display-component',
  templateUrl: './tweet-display.component.html',
  styleUrls: ['./tweet-display.component.css']
})
export class TweetDisplayComponent implements OnInit {
  @Input() tweet: Tweet;
  constructor() { }

  ngOnInit() {
  }
}
