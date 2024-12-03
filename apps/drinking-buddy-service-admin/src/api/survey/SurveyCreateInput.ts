import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyCreateInput = {
  drinkerType?: "Option1" | null;
  drinkingFrequency?: "Option1" | null;
  favoriteDrink?: string | null;
  user?: UserWhereUniqueInput | null;
};
