import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['_id', 'name', 'category', 'actions'];

   constructor( ) {

    }   

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }
}
