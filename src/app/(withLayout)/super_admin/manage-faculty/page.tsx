import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
  return (
    <div>
      <Link href={"/super_admin/manage-faculty/create"}>
        <Button>Create Faculty</Button>
      </Link>
      <h1>This is manage faculty</h1>
    </div>
  );
};

export default ManageFaculty;
