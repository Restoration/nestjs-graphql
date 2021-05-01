import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver';
import { ToDoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './todo.schema';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  providers: [TodoResolver, ToDoService],
})
export class TodoModule {}
