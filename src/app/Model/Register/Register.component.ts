import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  form: FormGroup;
  phonenumber = new FormControl('', [Validators.minLength(10)]);
  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      phonenumber: this.phonenumber,
    });
  }

  ngOnInit() {}
  sendcomment() {
    console.log(this.form);
  }
}
