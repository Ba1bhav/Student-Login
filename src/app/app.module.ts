import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AddComponent } from './front/add/add.component';
import{SearchComponent} from './back/search/search.component'
@NgModule({
  declarations: [
AddComponent,
    AppComponent,SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
