import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ToDo } from './todo.schema';
import { ToDoService } from './todo.service';
import { todoValidate } from './todo.validation';

@Resolver((of) => ToDo)
export class TodoResolver {
  constructor(private booksService: ToDoService) {}

  @Query((returns) => [ToDo])
  todos(): Promise<ToDo[]> {
    return this.booksService.findAll();
  }

  @Query((returns) => ToDo)
  async getToDo(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Mutation((returns) => ToDo)
  addToDo(@Args('newBook') newBook: todoValidate): Promise<ToDo> {
    return this.booksService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeToDo(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.booksService.remove(id);
  }
}