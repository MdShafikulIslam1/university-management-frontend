import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Department = () => {
  return (
    <div>
      <Link href={"/super_admin/manage-department/create"}>
        <Button>Create Department</Button>
      </Link>
      <h1>This is Department for super admin</h1>
    </div>
  );
};

export default Department;
