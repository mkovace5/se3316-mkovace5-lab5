import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _http: HttpService) { }
  songs: Object;

  ngOnInit() {
    this._http.getAll().subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    });
  }
  
}
