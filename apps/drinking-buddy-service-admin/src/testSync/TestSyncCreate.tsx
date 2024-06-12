import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TestSyncCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="testField1" source="testField1" />
        <NumberInput step={1} label="testField2" source="testField2" />
      </SimpleForm>
    </Create>
  );
};
