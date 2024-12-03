import { InputJsonValue } from "../../types";
import { SurveyUpdateManyWithoutUsersInput } from "./SurveyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  age?: number | null;
  ageField?: number | null;
  email?: string | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  genderOption?: "Option1" | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  surveys?: SurveyUpdateManyWithoutUsersInput;
  username?: string;
  userName?: string | null;
};
