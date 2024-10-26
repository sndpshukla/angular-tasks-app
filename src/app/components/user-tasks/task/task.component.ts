import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onTaskComplete() {
    this.complete.emit(this.task.id);
  }
}
