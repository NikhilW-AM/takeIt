import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  repeatPassword: string = ''
  constructor(private _fb: FormBuilder) { }

  registrationForm!: FormGroup
  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      givenName: [''],
      familyName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''  ]
    }, )
  }

  // passwordConfirming(c: AbstractControl): { invalid: boolean } {
  //   console.log('in')
  //   if (c.get('password')?.value) {
  //     if (c.get('password')?.value === c.get('confirmPassword')?.value) {
  //       return { invalid: true };
  //     }
  //   }
  //   return { invalid: false }
  // }

  identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get('password');
    const alterEgo = control.get('confirmPassword');

    console.log(!!(name?.value+ ' '+alterEgo?.value))
    return name && alterEgo && name?.value === alterEgo?.value ?  { identityRevealed: true } : { identityRevealed: false }  ;
  };
  submit(): void {
    console.log(this.registrationForm.status)
  }
}
