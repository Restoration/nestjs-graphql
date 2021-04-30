import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ToDo {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;
}
