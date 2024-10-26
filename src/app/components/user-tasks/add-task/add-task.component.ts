import { Component, EventEmitter, Output } from '@angular/core';

import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<Task>();
  @Output() closeTask = new EventEmitter<boolean>();

  private getNewTask() {
    return {
      dueDate: '',
      id: window.crypto.randomUUID(),
      summary: '',
      title: '',
      userId: '',
    };
  }

  task: Task = this.getNewTask();

  onBackdropKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Enter') {
      this.onCloseTask();
    }
  }

  onAddTask() {
    this.addTask.emit(this.task);
    this.onCloseTask();
  }

  onCloseTask() {
    this.closeTask.emit(true);
  }
}
