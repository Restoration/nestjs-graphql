import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class ToDo {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: '30' })
  @Field()
  name: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
