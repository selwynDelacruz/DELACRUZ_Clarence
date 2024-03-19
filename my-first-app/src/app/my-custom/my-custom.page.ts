import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 
  templateUrl: './my-custom.page.html',
 
})
export class MyCustomPage implements OnInit {

    constructor(private router: Router) { }

    goToMyCustomPage() {
      this.router.navigate(['my-custom/my-custom-with-id', 23 /** id */]);
    }


  ngOnInit() {
  }
  

}
