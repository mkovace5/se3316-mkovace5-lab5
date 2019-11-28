import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songs: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getAll().subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    });
  }

  /*{"songs":[    
    {"title":"Good song", "artist":"whomst", "album":"fun", "year":2000, "genre":"hip hop"},    
    {"title":"Take some", "artist":"ra", "album":"23", "year":2000, "genre":"dance",  
    {"title":"Hello", "artist":"1975", "album":"good times", "year":2000, "genre":"pop"},    
    {"title":"Edges", "artist":"ra", "album":"23", "year":2000, "genre":"dance}   
]} */ 

}


