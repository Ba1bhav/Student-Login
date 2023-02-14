import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import{AddComponent} from '../../app/front/add/add.component';


@NgModule({
  declarations: [
    SearchComponent
,AddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackModule { }
