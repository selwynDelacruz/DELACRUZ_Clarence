import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';
import { Holiday } from 'src/app/holiday.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit { 
  
  holidays : Holiday[] = [];
  data:any;
  id:any;
  username: any;


  constructor(private router: Router, private DataService: DataserviceService) { }
  

  // async loadData() {
  //   await this.DataService.fetchData().subscribe((response) => {
  //     this.data = response.results;
  //     this.data = this.data.slice(0, 5);
  //   });
  // }

  ngOnInit(): void {
    // this.loadData();
    this.DataService.fetchData().subscribe(item=> {
      this.holidays = item;
      this.holidays = this.holidays.slice(0, 4);
    })
    this.username = localStorage.getItem('username'); //getting session variable
  }

  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('username');
  }

}
