import {
  AntdLayout,
  AutoComplete,
  Input,
  Icons,
  Space,
} from "@pankod/refine-antd";

const { SearchOutlined } = Icons;

export const Header: React.FC = () => {
  return (
    <AntdLayout.Header
      style={{
        padding: "0px 24px",
        backgroundColor: "#FFF",
      }}
    >
      <AutoComplete
        style={{ width: "100%", maxWidth: "550px" }}
        filterOption={false}
      >
        <Input size="large" placeholder="Search" suffix={<SearchOutlined />} />
      </AutoComplete>
    </AntdLayout.Header>
  );
};
