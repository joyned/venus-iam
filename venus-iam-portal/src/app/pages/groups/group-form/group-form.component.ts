import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  public avaliableRoles: any[];
  public selectedRoles: any[];

  public formGroup: FormGroup;
  public group: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedRoles = [];
    this.initForm();
    this.loadSampleDataWithDelay();
  }

  private initForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      roles: new FormControl()
    });
  }

  get groupName() {
    return this.group ? this.group.name : 'Group';
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  private loadSampleDataWithDelay() {
    setTimeout(() => {
      this.avaliableRoles = [
        {
          id: 1,
          name: 'manager'
        },
        {
          id: 2,
          name: 'employee'
        },
        {
          id: 3,
          name: 'form-builder'
        },
        {
          id: 4,
          name: 'reviewer'
        },
        {
          id: 5,
          name: 'default'
        }
      ];
    });
  }

}
