import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpHeader = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/songs/api/open/song');
  }

  getSongs(){
    return this.http.get("http://localhost:8080/songs/api/open/search");
  }

  searchSongs(search) {
    //console.log(search);
    console.log(search);
    return this.http.get("http://localhost:8080/songs/api/open/search/"+search);
  }

  baseUrl:string = "http://localhost:8080/songs/api/secure/song";
  baseUrl2:string = "http://localhost:8080/songs/api/admin/deactivate/:id";
  baseUrl3:string = "http://localhost:8080/songs/api/secure/add-review";
  baseUrl4:string = "http://localhost:8080/songs/api/open/reviews"

  postSong(obj){
    console.log(obj);
    this.http.post(this.baseUrl, obj, httpHeader).subscribe(data => data);
  }

  postReview(obj){
    console.log(obj);
    this.http.post(this.baseUrl3, obj, httpHeader).subscribe(data => data);
  }

  getReviews(id){
    return this.http.get("http://localhost:8080/songs/api/open/reviews/"+id);
  }

  updateRating(id, rating){
    console.log(id, rating);
    var rat = this.http.get("http://localhost:8080/songs/api/getRating/" +id);
    var total = rat
  }
}