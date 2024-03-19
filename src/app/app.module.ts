import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnotherPage } from './another/another.page';
import { CustomComponent } from './shared/custom.component';
import { thirdPagePage } from './third-page/third-page';

@NgModule({
  declarations: [AppComponent, AnotherPage, CustomComponent, thirdPagePage], // declaring class names to recognized these on app.routing.module
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
