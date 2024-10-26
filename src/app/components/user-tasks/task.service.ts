import { Injectable } from '@angular/core';

import { dummyTasks } from '../../mocks/dummy-tasks';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskList: Task[] = dummyTasks;

  getUserTasks(userId: string) {
    return this.taskList.filter((task) => {
      return task.userId === userId;
    });
  }

  addTask(task: Task, userId: string) {
    task.userId = userId;
    this.taskList.unshift(task);
  }

  removeTask(taskId: string) {
    this.taskList = this.taskList?.filter((task) => task.id !== taskId) || [];
  }
}
