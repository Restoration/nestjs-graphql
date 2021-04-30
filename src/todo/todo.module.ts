import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver';
import { ToDoService } from './todo.service';

@Module({
  providers: [TodoResolver, ToDoService]
})
export class TodoModule {}
