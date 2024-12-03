import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TestSyncEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="testField1" source="testField1" />
        <NumberInput step={1} label="testField2" source="testField2" />
      </SimpleForm>
    </Edit>
  );
};
