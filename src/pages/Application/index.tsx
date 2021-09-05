import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import React, { useRef } from 'react';
import { Button } from 'antd';
import { Application } from '@/types/application';
import { useCrud } from '@/utils/use-crud';

const ApplicationListPage = () => {
  const columns: ProColumns<Application>[] = [
    { title: '名称', dataIndex: 'name' },
    { title: 'clientId', dataIndex: 'clientId' },
    { title: 'clientSecret', dataIndex: 'clientSecret' },
    { title: '单点登录地址', dataIndex: 'redirectUri' },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: () => [<a key="link">编辑</a>, <a key="link2">删除</a>],
    },
  ];
  const actionRef = useRef<ActionType>();
  const toolbar = () => [<Button>新建</Button>];
  const { fetchData } = useCrud<Application>({
    domain: 'applications',
    server: 'admin-server',
    searchModel: [{ field: 'name', compareType: 'like' }],
  });

  return (
    <ProTable<Application>
      columns={columns}
      request={fetchData}
      rowKey="id"
      pagination={{ pageSize: 10 }}
      dateFormatter="string"
      toolBarRender={toolbar}
    ></ProTable>
  );
};

export default ApplicationListPage;
