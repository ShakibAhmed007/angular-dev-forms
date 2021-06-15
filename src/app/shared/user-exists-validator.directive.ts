import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors
} from '@angular/forms';
import { of } from 'rxjs';

//real backend
// export function userExistsValidator(user: UserService): AsyncValidatorFn {
//   return (control: AbstractControl) => {
//     return user
//       .findUserByEmail(control.value)
//       .pipe(map(user => (user ? { userExists: true } : null)));
//   };
// }

export function userExistsValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (control.value === 's@gmail.com') {
      return of({ userExists: true });
    } else {
      return of(null);
    }
  };
}
