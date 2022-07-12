import React from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AntdLayout,
  Typography,
  Avatar,
  Space,
  AutoComplete,
  Input,
  Icons,
} from "@pankod/refine-antd";

const { SearchOutlined } = Icons;

const { Text } = Typography;

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();

  const shouldRenderHeader = user && (user.name || user.avatar);

  return shouldRenderHeader ? (
    <AntdLayout.Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
        backgroundColor: "#FFF",
      }}
    >
      <AutoComplete
        style={{ width: "100%", maxWidth: "550px" }}
        filterOption={false}
      >
        <Input size="large" placeholder="Search" suffix={<SearchOutlined />} />
      </AutoComplete>
      <Space>
        {user.name && (
          <Text ellipsis strong>
            {user.name}
          </Text>
        )}
        {user.avatar && (
          <Avatar size="large" src={user?.avatar} alt={user?.name} />
        )}
      </Space>
    </AntdLayout.Header>
  ) : null;
};
