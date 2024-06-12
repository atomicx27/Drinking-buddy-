import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SurveyListRelationFilter } from "../survey/SurveyListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  ageField?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Option1";
  genderOption?: "Option1";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  surveys?: SurveyListRelationFilter;
  username?: StringFilter;
  userName?: StringNullableFilter;
};
