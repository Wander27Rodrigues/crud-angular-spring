import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {     
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Formulario enviado' + this.form.value);

    this.service.save(this.form.value)
    .subscribe(data => this.onSucces(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

   private onSucces() {
    this.snackBar.open('Curso salvo com sucesso!','', { duration: 5000 });
    this.onCancel();
   }

  private onError(){
    this.snackBar.open('Error ao salvar curo.','', { duration: 5000 });
  }

}
