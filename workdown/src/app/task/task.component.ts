import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() title: string = 'Task 1';
  @Input() summary: string = 'Task 1';
  @Input() timeRemaining: number = new Date().getDate();
  @Input() isTaskComplete: boolean = false;

  showTaskInfo() {}
}
