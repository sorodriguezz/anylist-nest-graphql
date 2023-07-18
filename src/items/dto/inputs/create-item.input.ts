import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateItemInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  // @Field(() => Float)
  // @IsPositive()
  // quantity: number;

  @Field(() => String, { nullable: true }) // opcional
  @IsString()
  @IsOptional()
  quantityUnits?: string;
}
