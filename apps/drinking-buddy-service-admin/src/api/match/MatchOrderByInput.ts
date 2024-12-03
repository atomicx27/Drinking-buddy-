import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  compatibilityScore?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user1?: SortOrder;
  user2?: SortOrder;
};
