import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import { Show, Typography } from "@pankod/refine-antd";

import { IGarage } from "interfaces";

const { Title, Text } = Typography;

export const GarageShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IGarage>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Garage Name</Title>
      <Text>{record?.name}</Text>
    </Show>
  );
};
