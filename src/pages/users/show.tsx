import { IResourceComponentsProps, useOne, useShow } from "@pankod/refine-core";
import { Show, Typography, Tag, MarkdownField } from "@pankod/refine-antd";

import { IUser, ICategory } from "interfaces";

const { Title, Text } = Typography;

export const UserShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IUser>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Email</Title>
      <Text>{record?.email}</Text>

      <Title level={5}>Password</Title>
      <Text>{record?.password}</Text>

      <Title level={5}>First Name</Title>
      <Text>{record?.firstName}</Text>

      <Title level={5}>Last Name</Title>
      <Text>{record?.lastName}</Text>

      <Title level={5}>Gender</Title>
      <Text>{record?.gender}</Text>

      <Title level={5}>Phone Number</Title>
      <Text>{record?.phoneNumber}</Text>
    </Show>
  );
};
