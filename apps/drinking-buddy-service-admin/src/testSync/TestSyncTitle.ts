import { TestSync as TTestSync } from "../api/testSync/TestSync";

export const TESTSYNC_TITLE_FIELD = "testField1";

export const TestSyncTitle = (record: TTestSync): string => {
  return record.testField1?.toString() || String(record.id);
};
