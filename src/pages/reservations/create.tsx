import { IResourceComponentsProps } from "@pankod/refine-core";
import {
  Create,
  Form,
  Input,
  Select,
  useSelect,
  useForm,
  DatePicker,
} from "@pankod/refine-antd";

import "react-mde/lib/styles/css/react-mde-all.css";

import { IService, IReservation, IUser, IStatus } from "interfaces";

export const ReservationCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IReservation>();

  const { selectProps: serviceSelectProps } = useSelect<IService>({
    resource: "service",
    optionLabel: "name",
  });

  const { selectProps: userSelectProps } = useSelect<IUser>({
    resource: "users",
    optionLabel: "email",
  });

  const { selectProps: statusSelectProps } = useSelect<IStatus>({
    resource: "status",
    optionLabel: "status",
  });

  console.log(statusSelectProps);

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Reservation Date"
          name="r_date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Booking Time"
          name="r_time"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: "07:00",
                value: "07:00",
              },
              {
                label: "08:00",
                value: "08:00",
              },
              {
                label: "09:00",
                value: "09:00",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Service"
          name={["service", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...serviceSelectProps} />
        </Form.Item>

        <Form.Item
          label="User"
          name={["user", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...userSelectProps} />
        </Form.Item>

        <Form.Item
          label="Status"
          name={["status", "id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...statusSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
