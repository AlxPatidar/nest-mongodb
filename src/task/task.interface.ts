export interface Task {
  readonly _id: string;
  readonly title: string;
  readonly userId: string;
  readonly completed: boolean;
}
export interface CreateTask {
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
