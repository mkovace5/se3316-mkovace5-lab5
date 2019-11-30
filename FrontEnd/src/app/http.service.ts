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

  //getSongs(){
    //return this.http.get("http://localhost:8080/songs/api/open/search");
  //}

  searchSongs(search) {
    //console.log(search);
    var ser = search.toString();
    console.log(ser);
    let params = new HttpParams();
    params.set("search_term", ser);
    console.log(params.get("search_term"));
    return this.http.get("http://localhost:8080/songs/api/open/search" ,{params});
  }

  baseUrl:string = "http://localhost:8080/songs/api/secure/song";
  baseUrl2:string = "http://localhost:8080/songs/api/admin/deactivate/:id";
  baseUrl3:string = "http://localhost:8080/songs/api/secure/add-review/:id";
  baseUrl4:string = "http://localhost:8080/songs/api/open/search"

  postSong(obj){
    console.log(obj);
    this.http.post(this.baseUrl, obj, httpHeader).subscribe(data => data);
  }

  postReview(obj){
    console.log(obj);
    this.http.post(this.baseUrl3, obj, httpHeader).subscribe(data => data);
  }
}