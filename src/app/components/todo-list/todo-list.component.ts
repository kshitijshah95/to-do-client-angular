import { Component, Input } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListGETModel } from '../../models';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input({ required: true }) list: TodoListGETModel = {
    list_id: '',
    list_name: '',
    tasks: [],
  };
}
