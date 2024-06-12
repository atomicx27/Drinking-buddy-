import { SortOrder } from "../../util/SortOrder";

export type TestSyncOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  testField1?: SortOrder;
  testField2?: SortOrder;
  updatedAt?: SortOrder;
};
