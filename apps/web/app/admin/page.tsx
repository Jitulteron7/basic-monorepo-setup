import React from 'react';
import { AdminComponent } from '@repo/ui/admin';
type Props = {};

const AdminPage = (props: Props) => {
  return (
    <div>
      <h1>Admin</h1>
      <AdminComponent />
    </div>
  );
};

export default AdminPage;
