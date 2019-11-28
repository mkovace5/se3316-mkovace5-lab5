import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    return this.http.get('http://localhost:8080/api/open/song');
  }

  baseUrl:string = "http://localhost:8080/api/secure/song";
  baseUrl2:string = "http://localhost:8080/api/admin/deactivate/:id";

  postSong(obj){
    console.log(obj);
    this.http.post(this.baseUrl, obj, httpHeader).subscribe(data => data);
  }
}