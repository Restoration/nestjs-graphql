import { Injectable } from '@nestjs/common';
import { ToDo } from './todo.schema';
import { todoValidate } from './todo.validation';

let todos: ToDo[] = [
  {
    id: 1,
    name: 'test 1',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'test 2',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'test 3',
    createdAt: new Date(),
  },
] as ToDo[];

@Injectable()
export class ToDoService {
  findAll(): Promise<ToDo[]> {
    return Promise.resolve(todos);
  }

  findOneById(id: number): Promise<ToDo> {
    const todo = todos.find((todo) => todo.id === id);
    return Promise.resolve(todo);
  }

  create(data: todoValidate): Promise<ToDo> {
    const todo: ToDo = {
      ...data,
      id: Date.now(),
      createdAt: new Date()
    };
    todos.push(todo);

    return Promise.resolve(todo);
  }

  async remove(id: number): Promise<boolean> {
    todos = todos.filter((todo) => todo.id !== id);
    return true;
  }
}