export interface TodoListGETModel {
  list_id: string;
  list_name: string;
  tasks: TaskModel[];
}

export interface TaskModel {
  task_id: string;
  task_name: string;
  status: string;
}

export interface TodoItemGETModel {
  id: string;
  name: string;
  description: string;
  created_at: string;
  last_updated_at: string;
  list_id: string;
  status: string;
}

export interface TodoItemPOSTModel {
  id: string;
  name: string;
  description: string;
  created_at: string;
  last_updated_at: string;
  list_id: string;
  status: string;
}
