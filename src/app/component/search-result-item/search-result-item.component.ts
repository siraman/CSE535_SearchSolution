import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../model/query-result';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TweetDisplayComponent} from '../tweet-display/tweet-display.component';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {

  dialog: MatDialog;
  @Input() tweet: Tweet;

  onItemClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '60%';
    this.dialog.open(TweetDisplayComponent, dialogConfig);
  }

  constructor() { }

  ngOnInit() {
  }

}
