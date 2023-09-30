import { Button } from "antd";
import Link from "next/link";

const ManageStudent = () => {
  return (
    <div>
      <Link href={"/super_admin/manage-student/create"}>
        <Button>Create Student</Button>
      </Link>
      <h1>This is manage student page</h1>
    </div>
  );
};

export default ManageStudent;
