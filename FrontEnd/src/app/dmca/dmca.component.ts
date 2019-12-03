import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.scss']
})
export class DmcaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onload = function() {
      if(localStorage.getItem('content')) {
        document.querySelector('.content').innerHTML = localStorage.getItem('content');
      }
    }
    
    let editBtn = document.querySelector('#edit_content');
    let content = document.querySelector('.content');
    
    editBtn.addEventListener('click', () => {
      // Toggle contentEditable on button click
      
      
      // If disabled, save text
      if(document.getElementById("content").contentEditable === 'false') {
        localStorage.setItem('content', content.innerHTML);
      }
    });
  }

  edit(){
    document.getElementById("content").contentEditable = "true";
  }
  save(){
    
      document.getElementById("content").contentEditable = "false";
    
  }

}
