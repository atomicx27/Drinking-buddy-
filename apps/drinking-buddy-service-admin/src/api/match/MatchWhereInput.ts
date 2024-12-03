import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  compatibilityScore?: FloatNullableFilter;
  id?: StringFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
