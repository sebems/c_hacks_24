import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule, MatDialogContent, MatDialogActions, MatDialogClose, MatFormFieldModule, MatInputModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})


export class TaskCreateComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskCreateComponent>
  ){}

  onSubmit() {
    this.dialogRef.close()
  }
}
