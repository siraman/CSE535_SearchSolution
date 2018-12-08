import {Component, Inject, OnInit} from '@angular/core';
import {Tweet} from '../../model/query-result';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {GoogleCloudService} from '../../service/analytics/google-cloud.service';

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
