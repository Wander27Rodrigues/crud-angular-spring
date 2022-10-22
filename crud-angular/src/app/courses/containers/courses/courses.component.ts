import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  //CoursesService: CoursesService;

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

    ) {
    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError(error => {
        this.openError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }


  ngOnInit(): void {}

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
  
}
