import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    })
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.reactiveForm.value);
  }

  updateValue() {
    this.reactiveForm.patchValue({
      name: 'Nancy',
      password: '12345',
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
