import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent implements OnInit {
  form = this.fb.group({
    lessons: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  addLesson() {
    const formGroup = this.fb.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    });
    this.getLessons().push(formGroup);
  }

  getLessons() {
    return this.form.controls['lessons'] as FormArray;
  }
}
