import { Component } from '@angular/core';
import {title,student_database} from "./../../../assets/array";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
tittle=title
std=student_database;
search:any;

ind:any=new Set()
callme(){
this.ind.clear()
return true;
}
searchThis(){
this.std.filter((item:any,index:any)=>{
if(item['Email'].startsWith(this.search)){
this.ind.add(index)
}

})
}
remove(){
this.std.pop()
}
}
