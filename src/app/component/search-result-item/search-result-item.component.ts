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
  @Input() public tweet: Tweet;
  constructor(public dialog: MatDialog) { }
  onItemClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '60%';
    dialogConfig.data = {tweet: this.tweet};
    this.dialog.open(TweetDisplayComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
// openDialog() {
//   const dialogConfig = new MatDialogConfig();
//
//   dialogConfig.disableClose = true;
//   dialogConfig.autoFocus = true;
//
//   dialogConfig.data = {
//     id: 1,
//     title: 'Angular For Beginners'
//   };
//
//   this.dialog.open(CourseDialogComponent, dialogConfig);
// }
