import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCustomPageRoutingModule } from './my-custom-routing.module';

import { MyCustomPage } from './my-custom.page';
import { MyCustomWithIdPage } from './my-custom-with-id/my-custom-with-id';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCustomPageRoutingModule
  ],
  declarations: [
    MyCustomPage,
  MyCustomWithIdPage]
})
export class MyCustomPageModule {}
