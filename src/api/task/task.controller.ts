import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import {
  TaskResponse,
  TasksResponse,
  CreateTaskDto,
  Task,
} from './interfaces/task.interface';

@Controller('api/v1/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks(): Promise<TasksResponse> {
    const tasks: Task[] = await this.taskService.findAll();
    return {
      success: true,
      message: 'Task List fetch successfully.',
      data: tasks,
    };
  }

  @Get(':taskId')
  async getTask(@Param('taskId') taskId: string): Promise<TaskResponse> {
    const task = await this.taskService.getTask(taskId);
    return {
      success: true,
      message: 'Task item fetch successfully.',
      data: task,
    };
  }

  @Post()
  async addTask(@Body() task: CreateTaskDto): Promise<TaskResponse> {
    const tasks = await this.taskService.createTask(task);
    return {
      success: true,
      message: 'Task created successfully.',
      data: tasks,
    };
  }

  @Put(':taskId')
  async updateTask(
    @Param('taskId') taskId: string,
    @Body() task: CreateTaskDto
  ): Promise<TaskResponse> {
    const updatedTask = await this.taskService.updateTask(taskId, task);
    return {
      success: true,
      message: 'Task updated successfully.',
      data: updatedTask,
    };
  }

  @Delete(':taskId')
  async deleteTask(@Param('taskId') taskId: string): Promise<TaskResponse> {
    const tasks = await this.taskService.deleteTask(taskId);
    return {
      success: true,
      message: 'Task deleted successfully.',
      data: tasks,
    };
  }
}
