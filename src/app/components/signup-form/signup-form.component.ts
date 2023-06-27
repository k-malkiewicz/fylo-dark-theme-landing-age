import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]]
    })
  }

  get email() {
    return this.form.get('email');
  }

  submitForm(e: Event) {
    e.preventDefault();
    if (this.email?.invalid) {
      this.email.markAsTouched();
    } else {
      alert('Thanks for signing up!');
      this.email?.setValue('');
      this.email?.markAsUntouched();
    }
  }
}
