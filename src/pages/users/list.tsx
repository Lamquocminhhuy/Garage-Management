import { IResourceComponentsProps, useMany } from "@pankod/refine-core";
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
} from "@pankod/refine-antd";
import { IUser} from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IUser>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });

  // const categoryIds =
  //   tableProps?.dataSource?.map((item) => item.category.id) ?? [];
  // const { data: categoriesData, isLoading } = useMany<ICategory>({
  //   resource: "user",
  //   ids: categoryIds,
  //   queryOptions: {
  //     enabled: categoryIds.length > 0,
  //   },
  // });

  // const { selectProps: categorySelectProps } = useSelect<ICategory>({
  //   resource: "user",
  // });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="email"
          key="email"
          title="Email"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("email", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="firstName"
          key="firstName"
          title="First Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("firstName", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="lastName"
          key="lastName"
          title="Last Name"
          render={(value) => <TextField value={value}/>}
          defaultSortOrder={getDefaultSortOrder("lastName", sorter)}
          sorter
        />
      <Table.Column
          dataIndex="gender"
          key="gender"
          title="Gender"
          render={(value) => <TextField value={value}/>}
          defaultSortOrder={getDefaultSortOrder("gender", sorter)}
          sorter
        /> <Table.Column
        dataIndex="phoneNumber"
        key="phoneNumber"
        title="Phone Number"
        render={(value) => <TextField value={value}/>}
        defaultSortOrder={getDefaultSortOrder("phoneNumber", sorter)}
        sorter
      />
        {/* <Table.Column
          dataIndex={["category", "id"]}
          title="Category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TextField
                value={
                  categoriesData?.data.find((item) => item.id === value)?.title
                }
              />
            );
          }}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                {...categorySelectProps}
              />
            </FilterDropdown>
          )}
        /> */}
        <Table.Column<IUser>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
