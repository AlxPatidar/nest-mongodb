import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { CreateTask } from './task.interface';

@Injectable()
export class TaskService {
  private readonly tasks: Task[] = [
    {
      userId: '1',
      _id: '2',
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: '1',
      _id: '3',
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: '1',
      _id: '4',
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: '1',
      _id: '5',
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      userId: '1',
      _id: '6',
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
    {
      userId: '1',
      _id: '7',
      title: 'illo expedita consequatur quia in',
      completed: false,
    },
    {
      userId: '1',
      _id: '8',
      title: 'quo adipisci enim quam ut ab',
      completed: true,
    },
  ];

  createTask(task: CreateTask): Task[] {
    this.tasks.push({ _id: '8', ...task });
    return this.tasks;
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }

  getTask(taskId): Task {
    const task = this.tasks.find(task => task._id === taskId);
    return task;
  }

  deleteTask(taskId): Task {
    const task = this.tasks.findIndex(task => task._id === taskId);
    this.tasks.splice(1, task);
    return this.tasks[task];
  }
}
