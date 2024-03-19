import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCustomPage } from './my-custom.page';
import { MyCustomWithIdPage } from './my-custom-with-id/my-custom-with-id';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPage
  },
  {
    path: 'my-custom-with-id/:id',
    component: MyCustomWithIdPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCustomPageRoutingModule {}
