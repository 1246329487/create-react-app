import React from "react";
import { Table, Tag, Space } from "antd";
import { PageContainer } from "@ant-design/pro-layout";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Home = () => {
  const str: String = "123";
  console.log(str);
  return (
    <PageContainer
      header={{
        title: "页面标题",
        ghost: true,
        breadcrumb: {
          routes: [
            {
              path: "",
              breadcrumbName: "一级页面",
            },
            {
              path: "",
              breadcrumbName: "二级页面",
            },
            {
              path: "",
              breadcrumbName: "当前页面",
            },
          ],
        },
      }}
      tabBarExtraContent="首页内容"
      footer={[]}
    >
      <Table rowKey='name' columns={columns} dataSource={data} />
    </PageContainer>
  );
};
export default Home;
