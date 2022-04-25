import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  profileForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
  });

  updateProfile(){
    this.profileForm.patchValue({
      fullname: 'Minh Tuấn Nguyễn'
    });
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }
}
