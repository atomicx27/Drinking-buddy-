import { TestSyncWhereInput } from "./TestSyncWhereInput";
import { TestSyncOrderByInput } from "./TestSyncOrderByInput";

export type TestSyncFindManyArgs = {
  where?: TestSyncWhereInput;
  orderBy?: Array<TestSyncOrderByInput>;
  skip?: number;
  take?: number;
};
