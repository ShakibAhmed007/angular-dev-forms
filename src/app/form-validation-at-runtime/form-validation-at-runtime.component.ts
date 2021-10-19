import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation-at-runtime',
  templateUrl: './form-validation-at-runtime.component.html',
  styleUrls: ['./form-validation-at-runtime.component.css'],
})
export class FormValidationAtRuntimeComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      notificationType: ['email'],
    });

    /**
     * Add validity for phone field based on
     * notification type selection
     */
    this.reactiveForm
      .get('notificationType')
      .valueChanges.subscribe((value) => {
        let phoneControl = this.reactiveForm.get('phone');
        if (value === 'text') {
          phoneControl.setValidators([Validators.required]);
        } else {
          phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
      });
  }

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
