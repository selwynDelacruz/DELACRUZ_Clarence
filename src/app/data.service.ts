import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  fetchData(): Promise<String>{
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Data Fetched Success');
      }, 4000);
    });
  }

  catchData(){
    return new Promise((resolve, reject) => {
      const errorCondition = false;

      if (errorCondition){
        reject(new Error('Failed :('));
      } else {
        setTimeout(() =>{
          resolve('Data fetched success');
        }, 4000);
      }
    });
  }

  hatchData(){
    return new Promise((resolve, reject) => {
      const errorCondition = false;

      if (errorCondition){
        reject(new Error('Failed to access'));
      } else {
        setTimeout(() =>{
          resolve('Nice');
        }, 2000);
      }
    });
  }

  

  }
