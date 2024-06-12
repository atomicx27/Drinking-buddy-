import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  createdAt?: SortOrder;
  drinkerType?: SortOrder;
  drinkingFrequency?: SortOrder;
  favoriteDrink?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
