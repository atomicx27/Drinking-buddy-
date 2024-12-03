import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TestSyncWhereInput = {
  id?: StringFilter;
  testField1?: StringNullableFilter;
  testField2?: IntNullableFilter;
};
