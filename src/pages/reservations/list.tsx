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
  DateField,
  TagField,
  EmailField,
} from "@pankod/refine-antd";
import { IReservation, IStatus, IUser } from "interfaces";

export const ReservationList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<IReservation>({
    initialSorter: [
      {
        field: "id",
        order: "asc",
      },
    ],
  });

  const statusIds = tableProps?.dataSource?.map((item) => item.status.id) ?? [];
  const { data: statusData } = useMany<IStatus>({
    resource: "status",
    ids: statusIds,
    queryOptions: {
      enabled: statusIds.length > 0,
    },
  });

  const userIds = tableProps?.dataSource?.map((item) => item.user.id) ?? [];
  const { data: userData, isLoading } = useMany<IUser>({
    resource: "users",
    ids: userIds,
    queryOptions: {
      enabled: userIds.length > 0,
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
          dataIndex="r_date"
          key="r_date"
          title="Reservation Date"
          render={(value) => <DateField value={value} format="DD/MM/YYYY" />}
          defaultSortOrder={getDefaultSortOrder("r_date", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="r_time"
          key="r_time"
          title="Time Booked"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("r_date", sorter)}
          sorter
        />

        <Table.Column
          dataIndex={["user", "id"]}
          title="Customer"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }

            return (
              <EmailField
                value={userData?.data.find((item) => item.id === value)?.email}
              />
            );
          }}
        />

        <Table.Column
          dataIndex={["status", "id"]}
          title="Booking Status"
          render={(value) => {
            return (
              <TagField
                value={
                  statusData?.data.find((item) => item.id === value)?.status
                }
                color="blue"
              />
            );
          }}
        />

        <Table.Column<IReservation>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />

              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
