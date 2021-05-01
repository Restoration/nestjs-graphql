import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ToDo } from './todo.schema';
import { ToDoService } from './todo.service';
import { todoValidate } from './todo.validation';

@Resolver(() => ToDo)
export class TodoResolver {
  constructor(private todoService: ToDoService) {}

  @Query(() => [ToDo])
  todos(): Promise<ToDo[]> {
    return this.todoService.findAll();
  }

  @Query(() => ToDo)
  async getToDo(@Args({ name: 'id', type: () => Int }) id: number) {
    const todo = await this.todoService.findOneById(id);
    if (!todo) {
      throw new NotFoundException(id);
    }
    return todo;
  }

  @Mutation(() => ToDo)
  addToDo(@Args('addToDo') newTodo: todoValidate): Promise<ToDo> {
    return this.todoService.create(newTodo);
  }

  @Mutation(() => Boolean)
  async removeToDo(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.todoService.remove(id);
  }
}
