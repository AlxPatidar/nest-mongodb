export interface Task {
  readonly title: string;
  readonly userId: string;
  readonly completed: boolean;
}

export interface CreateTaskDto {
  readonly title: string;
  readonly userId: string;
  readonly completed: boolean;
}

export interface TasksResponse {
  success: boolean;
  message: string;
  data: Task[];
}

export interface TaskResponse {
  success: boolean;
  message: string;
  data: Task;
}
