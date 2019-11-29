import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  
  addReview(form: NgForm){
    console.log(form.value);
    
    var songRating = form.value.rating;
    var songReview = form.value.review;
    
    let data: any = Object.assign(
      { review: songReview },
      { rating: songRating },
      { songid: this }
    );

    this._http.postReview(data);
  
  }
  

}
