import { IResourceComponentsProps } from "@pankod/refine-core";
import { Create, Form, Input, useForm } from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IGarage } from "interfaces";

export const GarageCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IGarage>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Garage Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
