import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //CoursesService: CoursesService;

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog
    ) {
    //this.courses = [];
    //this.CoursesService = new CoursesService();
    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(DialogDataExempleDiealog, {
      data: {
        animal: 'panda'
      }
    });
  }


  ngOnInit(): void {}
}
