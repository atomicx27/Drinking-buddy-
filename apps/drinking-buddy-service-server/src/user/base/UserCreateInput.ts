/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsString,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumUserGender } from "./EnumUserGender";
import { EnumUserGenderOption } from "./EnumUserGenderOption";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SurveyCreateNestedManyWithoutUsersInput } from "./SurveyCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  ageField?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @IsOptional()
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumUserGenderOption,
  })
  @IsEnum(EnumUserGenderOption)
  @IsOptional()
  @Field(() => EnumUserGenderOption, {
    nullable: true,
  })
  genderOption?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SurveyCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SurveyCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SurveyCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  surveys?: SurveyCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userName?: string | null;
}

export { UserCreateInput as UserCreateInput };
