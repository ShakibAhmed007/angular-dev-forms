import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordStrengthValidator } from '../shared/password-validator.directive';
import { userExistsValidator } from '../shared/user-exists-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  submitted = false;
  stateList: string[] = ['Dhaka', 'Khulna', 'Chattogram'];
  reactiveForm = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        asyncValidators: [userExistsValidator()], // custom async validator
      },
    ],
    password: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          passwordStrengthValidator(), // custom validator
        ],
      },
    ],
    state: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (!this.reactiveForm.valid) {
      return;
    }
    // Get all value
    console.log(this.reactiveForm.value);
    // Get specific form field value
    console.log(this.reactiveForm.controls['name'].value);
  }

  /**
   * Differnce between set value and patch value is
   * set value requires all defined controls of formgroup
   * but in patchValue we can pass any control
   */
  setValue() {
    // all field
    this.reactiveForm.setValue({
      name: 'Nancy',
      email: 's1@gmail.com',
      password: 'Ss12345',
      state: ['Dhaka', 'Chattogram'],
      address: {
        street: '123 Drew Street',
        city: 'Dhaka',
      },
    });
  }

  patchValue() {
    // only two field
    this.reactiveForm.patchValue({
      name: 'Nancy',
      email: 's1@gmail.com',
    });
  }
}
