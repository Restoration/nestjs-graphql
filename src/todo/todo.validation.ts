import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class todoValidate {
  @Field()
  @MaxLength(30)
  name: string;
}
