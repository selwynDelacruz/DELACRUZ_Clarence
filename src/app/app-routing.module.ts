import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithIDPage } from './my-custom-page/custom-page-with-id/custom-page-with-id';
import { AnotherPage } from './another/another.page';
import { AuthenticationService } from './authentication.service';
import { CustomComponent } from './shared/custom.component';
import { thirdPagePage } from './third-page/third-page';
const routes: Routes = [
  {
    path:'assignment1',
    loadChildren: () => import('./assignment1/assignment1.module').then(m => m.assignment1) // class name from assignment1.module.ts
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-custom-page',
    loadChildren: () => import('./my-custom-page/my-custom-page.module').then( m => m.MyCustomPagePageModule)
  },
  {
    path: 'my-custom-page/:id', //folder path
    component: MyCustomPageWithIDPage // page class name
  },
  {
    path:'another', // folder path
    component: AnotherPage, // page class name
  },
  {
    path:'shared', // folder path
    component: CustomComponent, // component class name
  },
  {
    path:'third-page', // folder path
    component: thirdPagePage, // component class name
    canActivate:[AuthenticationService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}