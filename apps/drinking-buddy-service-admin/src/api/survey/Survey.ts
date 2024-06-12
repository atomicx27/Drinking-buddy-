import { User } from "../user/User";

export type Survey = {
  createdAt: Date;
  drinkerType?: "Option1" | null;
  drinkingFrequency?: "Option1" | null;
  favoriteDrink: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
