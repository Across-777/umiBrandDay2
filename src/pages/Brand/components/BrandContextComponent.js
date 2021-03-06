import React from 'react';
import { Table, Card, Input, Select, Button } from 'antd';

const { Option } = Select;

export default  (props) => {
  const columns = [
    {
      title: '品牌名称',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
    },
    {
      title: '操作人',
      dataIndex: 'operator',
      key: 'operator',
    },
    {
      title: '操作时间',
      dataIndex: 'operationTime',
      key: 'operationTime',
    },
  ];

  // const data = [];
  const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

  return (
    <div className="content">
      <Card className="query-criteria-card" title="查询条件" bordered={false}>
        <div className="brand-name-area">
          品牌名称：
          <Input className="brand-name-input" />
        </div>
        <div className="brand-state-area">
          状态：
          {/* <Select defaultValue="请选择" style={{ width: 120 }} onChange={handleChange}> */}
          <Select defaultValue="init" style={{ width: 150 }}>
            <Option value="init">请选择</Option>
            <Option value="toBeConfirm">待确定</Option>
            <Option value="success">成功</Option>
            <Option value="fail">失败</Option>
            <Option value="cancel">取消</Option>
          </Select>
        </div>
        <div className="btn-area">
          <Button type="primary">查 询</Button>
          <Button className="reset-btn">重 置</Button>
        </div>
      </Card>
      <Card className="brand-confirm-card" title="品牌确认" bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
};

