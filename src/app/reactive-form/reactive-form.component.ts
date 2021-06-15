import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  stateList: string[] = ['Dhaka', 'Khulna', 'Chattogram'];

  reactiveForm = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email]
      }
    ],
    password: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ]
      }
    ],
    state: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['']
    })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    // Get all value
    console.log(this.reactiveForm.value);

    // Get specific form field value
    console.log(this.reactiveForm.controls['name'].value);
  }

  updateValue() {
    this.reactiveForm.patchValue({
      name: 'Nancy',
      password: '12345',
      state: ['Dhaka', 'Chattogram'],
      address: {
        street: '123 Drew Street',
        city: 'Dhaka'
      }
    });
  }

  setValue() {
    this.reactiveForm.controls['name'].setValue('SKB');
  }
}
