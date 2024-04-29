import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { Card, Space } from 'antd';
import React from 'react';
import { useModel } from 'umi';

const TableList: React.FC = () => {
  const message = useModel('demo');
  return (
    <PageContainer>
      <Space direction="vertical" size={16}>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>{message}</p>
        </Card>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </PageContainer>
  );
};
export default TableList;
