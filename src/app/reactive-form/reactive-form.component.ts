import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['']
    })
  });
  constructor(private fb: FormBuilder) {}

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
