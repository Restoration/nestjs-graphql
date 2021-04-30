import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
   GraphQLModule.forRoot({
     autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
   }),
   TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
