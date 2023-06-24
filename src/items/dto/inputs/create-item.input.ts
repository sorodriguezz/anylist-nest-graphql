import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field(() => String)
  name: string;

  @Field(() => Float)
  quantity: number;

  @Field(() => String, { nullable: true }) // opcional
  quantityUnits?: string;
}
