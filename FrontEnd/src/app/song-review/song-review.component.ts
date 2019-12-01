import { Component, OnInit } from '@angular/core';
import { FilterPipe } from "../filter.pipe";

@Component({
  selector: 'app-song-review',
  templateUrl: './song-review.component.html',
  styleUrls: ['./song-review.component.scss']
})
export class SongReviewComponent implements OnInit {

  constructor() { }
  songID : String;

  ngOnInit() {
    var songID = "2afa";
  }
  //for all reviews with song id = "id", list reviews
}
