import { JsonValue } from "type-fest";
import { Survey } from "../survey/Survey";

export type User = {
  age: number | null;
  ageField: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gender?: "Option1" | null;
  genderOption?: "Option1" | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  surveys?: Array<Survey>;
  updatedAt: Date;
  username: string;
  userName: string | null;
};
