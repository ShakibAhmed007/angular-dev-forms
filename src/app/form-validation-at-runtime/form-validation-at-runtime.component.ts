import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation-at-runtime',
  templateUrl: './form-validation-at-runtime.component.html',
  styleUrls: ['./form-validation-at-runtime.component.css'],
})
export class FormValidationAtRuntimeComponent implements OnInit {
  reactiveForm = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
      },
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (!this.reactiveForm.valid) {
      return;
    }
    // Get all value
    console.log(this.reactiveForm.value);
    // Get specific form field value
    console.log(this.reactiveForm.controls['name'].value);
  }
}
