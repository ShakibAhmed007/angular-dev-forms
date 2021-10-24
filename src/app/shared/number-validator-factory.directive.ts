import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function numberValidator(max: number, min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    if (value < min || value > max) {
      return { numberValidation: true };
    } else {
      return null;
    }
  };
}
