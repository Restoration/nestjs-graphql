import { Injectable } from '@nestjs/common';
import { ToDo } from './todo.schema';
import { todoValidate } from './todo.validation';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDo)
    private todoRepostiory: Repository<ToDo>,
  ) {}

  findAll(): Promise<ToDo[]> {
    return this.todoRepostiory.find();
  }

  findOneById(id: number): Promise<ToDo> {
    return this.todoRepostiory.findOne(id);
  }

  async create(data: todoValidate): Promise<ToDo> {
    const todo = this.todoRepostiory.create(data);
    await this.todoRepostiory.save(todo);
    return todo;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.todoRepostiory.delete(id);
    return result.affected > 0;
  }
}
