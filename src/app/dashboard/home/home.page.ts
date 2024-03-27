import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit { 
  constructor(private router: Router, private DataService: DataserviceService) { }
  data:any;
  id:any;
  
  ngOnInit() {
  }
  async loadData() {
    await this.DataService.fetchData().subscribe((response) => {
      this.data = response.results;
      this.data = this.data.slice(0, 5);
    });
  }

}
