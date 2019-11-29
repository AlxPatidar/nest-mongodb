import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './interfaces/createTask.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  // Create task list using model save
  async createTask(createCatDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createCatDto);
    return await createdTask.save();
  }

  // Get task list from database
  async findAll(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  // Get task item from database
  async getTask(taskId): Promise<Task> {
    return await this.taskModel.findOne({ _id: taskId });
  }

  // Update task item
  async updateTask(taskId: string, task: CreateTaskDto): Promise<Task> {
    const updateTask: any = {};
    if (task.title) {
      updateTask.title = task.title;
    }
    if (task.completed || !task.completed) {
      updateTask.completed = task.completed;
    }
    return await this.taskModel.findByIdAndUpdate(taskId, updateTask, {
      new: true,
    });
  }

  // Remove task from database using findOneAndDelete method
  async deleteTask(taskId): Promise<Task> {
    return await this.taskModel.findOneAndDelete({ _id: taskId });
  }
}
