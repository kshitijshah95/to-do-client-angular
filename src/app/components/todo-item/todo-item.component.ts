import { Component, Input } from '@angular/core';
import { TaskModel } from '../../models';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input({ required: true }) item: TaskModel = {
    task_id: '',
    task_name: '',
    status: '',
  };
}
