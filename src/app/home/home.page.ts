import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  /**
   * Home Page with 2 methods: goByEvent(), goWithAuthorization()
   * 
   */

 
  // data: String = '';
  // isLoading = false;
  // loadingText = 'loading..';

  constructor(private router: Router, private authenticate:AuthenticationService, private DataService: DataService) {
    
    // DataService.hatchData().then( data => {
    //   console.log(data);
    // }).catch(error => {
    //   console.log(error);
    // }).finally(() => {
    //   this.isLoading=false;
    // });
  }

  goByEvent(){
      this.router.navigate(["another"]); // navigates to another page
  }
  goWithAuthorization(){
    // for authorization
    /**
     * After with clicking Authenticate button, 
     * this will change the boolean state on authentication.service.ts(authenticate = false) to true; 
     * This will allow goByEvent() method to access another.page.ts
     */
    this.authenticate.authenticate = true;
    
    /** 
     * this.[AuthenticationService name on constructor()].[authenticate boolean name on authentication service]]
     * see line 18 constructor();
     */
    
    //this.router.navigate(["another"]);
  }

// ASSIGNMENT #2

  ionViewWillEnter(){
    console.log('You will enter home page')
  }

  ionViewDidEnter	(){
    console.log('You did enter home page');
  }

  ionViewWillLeave	(){
    console.log('You will leave home page');
  }

  ionViewDidLeave	(){
    console.log('You did leave home page');
  }
  
 


}
