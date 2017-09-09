import { Inject, Component, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { NewUser } from 'app/shared/models//new-user.model';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  addUserForm: FormGroup;
  
  constructor(
    public dialogRef: MdDialogRef<AddUserFormComponent>,
    @Inject(MD_DIALOG_DATA) public data: NewUser
  ) { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      'login': new FormControl(this.data.login, [
        Validators.required,
        Validators.minLength(4),
      ]),
      'password': new FormControl(this.data.password, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onAddClick(): void {
    this.dialogRef.close(true);
  }

  get login() { return this.addUserForm.get('login'); }
  get password() { return this.addUserForm.get('password'); }
};