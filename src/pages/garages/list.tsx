import { IResourceComponentsProps, useMany } from "@pankod/refine-core";
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  Space,
  ShowButton,
  EditButton,
  DeleteButton,
} from "@pankod/refine-antd";
import { IGarage } from "interfaces";

export const GarageList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IGarage>({
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
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
          title="Garage Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
          sorter
        />

        <Table.Column<IGarage>
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
