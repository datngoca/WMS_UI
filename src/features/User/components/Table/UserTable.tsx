import classNames from "classnames/bind";
import styles from "./UserTable.module.scss";

import type { TableProps } from "antd";
import { Flex, Space, Tag, Table } from "antd";

const cx = classNames.bind(styles);

interface DataType {
  key: string;
  fullName: string;
  email: string;
  age: number;
  address: string;
  roles: string[];
}

const color_role = {
  ADMIN: "geekblue",
  USER: "green",
};

const data: DataType[] = [
  {
    key: "1",
    fullName: "John Brown",
    email: "john.brown@example.com",
    age: 32,
    address: "New York No. 1 Lake Park",
    roles: ["ADMIN", "USER"],
  },
  {
    key: "2",
    fullName: "Jim Green",
    email: "jim.green@example.com",
    age: 42,
    address: "London No. 1 Lake Park",
    roles: ["USER"],
  },
  {
    key: "3",
    fullName: "Joe Black",
    email: "joe.black@example.com",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    roles: ["USER", "ADMIN"],
  },
];

const UserTable = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Roles",
      key: "roles",
      dataIndex: "roles",
      render: (_, { roles }) => (
        <Flex gap="small" align="center" wrap>
          {roles.map((role) => {
            const color =
              color_role[role as keyof typeof color_role] || "default";
            return (
              <Tag color={color} key={role}>
                {role.toUpperCase()}
              </Tag>
            );
          })}
        </Flex>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.fullName}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table<DataType>
      columns={columns}
      dataSource={data}
      className={cx("table")}
    />
  );
};

export default UserTable;
