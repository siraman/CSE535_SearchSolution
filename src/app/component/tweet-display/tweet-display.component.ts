import {Component, Input, OnInit} from '@angular/core';
import {Tweet, User} from '../../model/query-result';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material';
import {Inject} from '@angular/core';
import {GoogleCloudService} from '../search-analysis/google-cloud/google-cloud.service';

@Component({
  selector: 'app-tweet-display-component',
  templateUrl: './tweet-display.component.html',
  styleUrls: ['./tweet-display.component.css']
})

export class TweetDisplayComponent implements OnInit {
  public tweet: Tweet;
  public documentScore: number;
  public documentMagnitude: number;
  constructor(private dialogRef: MatDialogRef<TweetDisplayComponent>, @Inject(MAT_DIALOG_DATA) data, private score: GoogleCloudService) {
    this.tweet = data.tweet;
    this.score.getScore(this.tweet).subscribe(scores => {
      if (scores.response != null) {
        console.log('Success');
      } else {
        console.log(scores);
        console.log('Fail');
        this.documentScore = scores['documentSentiment']['score'];
        this.documentMagnitude = scores['documentSentiment']['magnitude'];
        console.log(this.documentScore);
        console.log(this.documentMagnitude);
      }
    });
  }

  ngOnInit() {
  }
}
