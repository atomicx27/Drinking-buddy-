import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyUpdateInput = {
  drinkerType?: "Option1" | null;
  drinkingFrequency?: "Option1" | null;
  favoriteDrink?: string | null;
  user?: UserWhereUniqueInput | null;
};
