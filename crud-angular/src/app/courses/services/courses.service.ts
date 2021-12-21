import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  // Observable que retorna um array de cursos
  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
      first(),
      delay(4000),
      tap(courses => console.log(courses))
    );
  }

}
