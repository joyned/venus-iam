import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      login: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

}
