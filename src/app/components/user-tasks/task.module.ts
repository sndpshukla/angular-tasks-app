import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { UserTasksComponent } from './user-tasks.component';

@NgModule({
  declarations: [UserTasksComponent, TaskComponent, AddTaskComponent],
  exports: [UserTasksComponent],
  imports: [CommonModule, DatePipe, FormsModule, SharedModule],
})
export class TasksModule {}
