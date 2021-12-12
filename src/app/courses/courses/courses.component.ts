import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front-end' }
  ];
  displayedColumns = [ 'name', 'category' ];

  //CoursesService: CoursesService;

  constructor(private CoursesService: CoursesService) {
    //this.courses = [];
    //this.CoursesService = new CoursesService();

  }
  ngOnInit(): void {
    this.courses = this.CoursesService.list();
  }

}
