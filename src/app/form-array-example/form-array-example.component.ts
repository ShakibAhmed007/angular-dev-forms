import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent {
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    }
  ];

  form = this.fb.group({
    lessons: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }

  getFormGroupAt(index) {
    return this.lessons.at(index) as FormGroup;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  updateValue() {
    this.form = this.fb.group({
      lessons: this.fb.array(
        this.data.map(item => {
          return this.fb.group({
            title: item['title']
          });
        })
      )
    });
  }

  onSubmit() {
    console.log(this.lessons);
  }
}
