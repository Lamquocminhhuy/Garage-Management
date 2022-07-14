import { IResourceComponentsProps, useMany } from "@pankod/refine-core";
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  EditButton,
  DeleteButton,
  TagField,
  ShowButton,
  MarkdownField,
  ImageField,
} from "@pankod/refine-antd";
import { IService, IGarage, ILocalFile } from "interfaces";

export const ServiceList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IService>({
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
  });

  console.log(tableProps.dataSource);

  const garageIds = tableProps?.dataSource?.map((item) => item.garage.id) ?? [];
  const { data: garageData, isLoading } = useMany<IGarage>({
    resource: "garage",
    ids: garageIds,
    queryOptions: {
      enabled: garageIds.length > 0,
    },
  });

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
          dataIndex="name"
          key="name"
          title="Service Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="description"
          key="description"
          title="Description"
          render={(value) => <MarkdownField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="price"
          key="price"
          title="Price"
          render={(value) => {
            return <TagField value={value + " $"} color="green" />;
          }}
          defaultSortOrder={getDefaultSortOrder("price", sorter)}
          sorter
        />

        <Table.Column
          dataIndex={["garage", "id"]}
          title="Garage Name"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <TagField
                value={garageData?.data.find((item) => item.id === value)?.name}
              />
            );
          }}
        />
        <Table.Column
          dataIndex="time"
          key="time"
          title="Time"
          render={(value) => <TextField value={value + " minutes"} />}
          defaultSortOrder={getDefaultSortOrder("time", sorter)}
          sorter
        />

        <Table.Column
          dataIndex="imageId"
          key="imageId"
          title="Image"
          render={(value) => {
            return (
              <ImageField
                value={`http://localhost:3000/local-files/${value}`}
                width={200}
                height={150}
              />
            );
          }}
          defaultSortOrder={getDefaultSortOrder("price", sorter)}
          sorter
        />
        <Table.Column<IService>
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
