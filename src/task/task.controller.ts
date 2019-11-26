import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResponse, TasksResponse, CreateTask } from './task.interface';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(): TasksResponse {
    return {
      success: true,
      message: 'Task List fetch successfully.',
      data: this.taskService.getTasks(),
    };
  }

  @Get(':taskId')
  async getTask(@Param('taskId') taskId: string): Promise<TaskResponse> {
    const task = await this.taskService.getTask(taskId)
    return {
      success: true,
      message: 'Task item fetch successfully.',
      data: task,
    };
  }

  @Post()
  async addTask(@Body() task: CreateTask): Promise<TasksResponse> {
    const tasks = await this.taskService.createTask(task);
    return {
      success: true,
      message: 'Task item fetch successfully.',
      data: tasks,
    };
  }

  @Delete(':taskId')
  async deleteTask(@Param('taskId') taskId: string): Promise<TaskResponse> {
    const tasks = await this.taskService.deleteTask(taskId);
    return {
      success: true,
      message: 'Task item fetch successfully.',
      data: tasks,
    };
  }
}
