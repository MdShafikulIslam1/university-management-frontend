import { Button } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";

const ManageAdmin = () => {
  return (
    <div>
      <Link href={"/super_admin/manage-admin/create"}>
        <Button>Create Admin</Button>
      </Link>
      <h1>Manage admin page</h1>
    </div>
  );
};

export default ManageAdmin;
