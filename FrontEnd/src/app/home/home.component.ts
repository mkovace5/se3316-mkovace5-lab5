import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm , FormControl} from '@angular/forms';
import { SongsComponent } from '../songs/songs.component';
import { FilterPipe} from '../filter.pipe';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  searchText = new FormControl('')
  constructor(private _http: HttpService) { }
  songs: Object;
  fSongs: Object;
  mySongs: Array<SongsComponent>;

  checkSearch(){
    this.searchText.valueChanges.subscribe(val => {
      this._http.searchSongs(val).subscribe(data => {
        this.fSongs = data;
        console.log(data)
      });
    })

  }
  ngOnInit() {
    this._http.getAll().subscribe(data => {
      this.songs = data;
      console.log(this.songs);
    });
    this.checkSearch();
  }
}
