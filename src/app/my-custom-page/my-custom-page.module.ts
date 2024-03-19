import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCustomPagePageRoutingModule } from './my-custom-page-routing.module';

import { MyCustomPagePage } from './my-custom-page.page';
import { MyCustomPageWithIDPage } from './custom-page-with-id/custom-page-with-id';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCustomPagePageRoutingModule
  ],
  declarations: [MyCustomPagePage, MyCustomPageWithIDPage]
})
export class MyCustomPagePageModule {}
