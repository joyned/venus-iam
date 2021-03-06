import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {

  public roleForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.roleForm = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      login: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

}
