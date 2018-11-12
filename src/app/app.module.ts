import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product-list/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //Needed for HTTP Requests (from @angular/common/http)
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, 
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //should display a 404 page not found

    ]),//Needed for routing
    ProductModule 
  ],
  providers: [
    //CoursesService //Used for dependency injection. This is needed for CoursesService to be added to Courses 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
