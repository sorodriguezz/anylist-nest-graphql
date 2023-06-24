import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateItemInput } from './create-item.input';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
