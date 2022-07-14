import { IResourceComponentsProps, useApiUrl } from "@pankod/refine-core";
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
  Button,
  Upload,
  getValueFromEvent,
} from "@pankod/refine-antd";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IGarage, IService } from "interfaces";
import { useState } from "react";

export const ServiceCreate: React.FC<IResourceComponentsProps> = () => {
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const apiUrl = useApiUrl();

  const { formProps, saveButtonProps } = useForm<IService>();

  const { selectProps: garageSelectProps } = useSelect<IGarage>({
    resource: "garage",
    optionLabel: "name",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Service Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Garage"
          name={["garage", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...garageSelectProps} />
        </Form.Item>

        <Form.Item label="Image">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              action={`${apiUrl}/service`}
              listType="picture"
              maxCount={5}
              multiple
              accept=".jpg,.jpeg,.png"
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <ReactMde
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
            }
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
