import { InputJsonValue } from "../../types";
import { SurveyCreateNestedManyWithoutUsersInput } from "./SurveyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  age?: number | null;
  ageField?: number | null;
  email?: string | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  genderOption?: "Option1" | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  surveys?: SurveyCreateNestedManyWithoutUsersInput;
  username: string;
  userName?: string | null;
};
