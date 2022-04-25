import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    pass:['', Validators.required]
  });
}
