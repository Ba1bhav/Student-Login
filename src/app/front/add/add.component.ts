import { Component } from '@angular/core';
import{AppComponent} from './../../app.component'
import {title,student_database} from "./../../../assets/array";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public titlee=title;
  public student_databases=student_database;
  gotval(somedata:Object){
    console.log('Fetched',somedata)
  this.student_databases.push(somedata)
  console.log(this.student_databases)
  }
}
