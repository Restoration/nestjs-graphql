import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class todoValidate {
    @Field()
    @MaxLength(30)
    name: string;
}
