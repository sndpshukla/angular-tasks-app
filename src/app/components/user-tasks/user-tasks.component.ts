import { Component, Input } from '@angular/core';

import { Task } from '../../models/task.model';
import { User } from '../../models/user.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.scss',
})
export class UserTasksComponent {
  constructor(private taskService: TaskService) {}

  @Input({ required: true }) user!: User;

  showAddTask = false;

  get selectedUsersTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onShowAddTask(close?: boolean) {
    if (close) {
      this.showAddTask = false;
    } else {
      this.showAddTask = true;
    }
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task, this.user.id);
  }
}
