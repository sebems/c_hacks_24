import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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
