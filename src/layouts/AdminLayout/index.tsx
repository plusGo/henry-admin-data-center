import React, { FC } from 'react';

const AdminLayout: FC = (props) => {
  return <div className="w-full h-full p-8">{props.children}</div>;
};

export default AdminLayout;
