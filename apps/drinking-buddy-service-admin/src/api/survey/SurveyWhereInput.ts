import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyWhereInput = {
  drinkerType?: "Option1";
  drinkingFrequency?: "Option1";
  favoriteDrink?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
