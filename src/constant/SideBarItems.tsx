import { MenuItem, getItem } from "@/utils/getMenuItems";
import {
  FileTextOutlined,
  CreditCardOutlined,
  ThunderboltOutlined,
  ScheduleOutlined,
  AppstoreOutlined,
  TableOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
const SideBarItems = (role: string) => {
  const defaultSidebarItems: MenuItem[] = [
    getItem("Profile", "profile", <ProfileOutlined />, [
      getItem(
        <Link href={`/${role}`}>Account Profile</Link>,
        `/${role}/profile`
      ),
      getItem(
        <Link href={`/${role}/change-password`}>Change Password</Link>,
        `/${role}/change-password`
      ),
    ]),
  ];
  const commonAdminSidebarItems: MenuItem[] = [
    getItem(
      <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      `/${role}/manage-student`,
      <TableOutlined />
    ),
    getItem(
      <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      `/${role}/manage-faculty`,
      <TableOutlined />
    ),
  ];
  const adminSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    getItem(
      <Link href={`/${role}/manage-academic`}>Manage Academic</Link>,
      `/${role}/manage-academic`,
      <TableOutlined />,
      [
        getItem(
          <Link href={`/${role}/academic-faculty`}>Faculties</Link>,
          `/${role}/academic-faculty`
        ),
        getItem(
          <Link href={`/${role}/academic-department`}>Departments</Link>,
          `/${role}/academic-department`
        ),
        getItem(
          <Link href={`/${role}/academic-semester`}>Semesters</Link>,
          `/${role}/academic-semester`
        ),
      ]
    ),
    getItem(
      <Link href={`/${role}/management`}>Management</Link>,
      `/${role}/management`,
      <AppstoreOutlined />,
      [
        getItem(
          <Link href={`/${role}/department`}>Department</Link>,
          `/${role}/department`
        ),
        getItem(
          <Link href={`/${role}/building`}>Building</Link>,
          `/${role}/building`
        ),
        getItem(<Link href={`/${role}/room`}>Room</Link>, `/${role}/room`),
        getItem(
          <Link href={`/${role}/course`}>Course</Link>,
          `/${role}/course`
        ),
        getItem(
          <Link href={`/${role}/semester-registration`}>
            Semester Registration
          </Link>,
          `/${role}/semester-registration`
        ),
        getItem(
          <Link href={`/${role}/offered-course`}>Offered Course</Link>,
          `/${role}/offered-course`
        ),
        getItem(
          <Link href={`/${role}/offered-course-section`}>Course Section</Link>,
          `/${role}/offered-course-section`
        ),
        getItem(
          <Link href={`/${role}/offered-course-schedule`}>
            Course Schedule
          </Link>,
          `/${role}/offered-course-schedule`
        ),
      ]
    ),
  ];

  const superAdminSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    getItem(
      <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      `/${role}/admin`,
      <TableOutlined />
    ),
    getItem(
      <Link href={`/${role}/manage-user`}>Manage User</Link>,
      `/${role}/manage-user`,
      <TableOutlined />
    ),
    getItem(
      // <Link href={`/${role}/management`}>Management</Link>,
      "Management",
      `/${role}/management`,
      <AppstoreOutlined />,
      [
        getItem(
          <Link href={`/${role}/manage-department`}>Department</Link>,
          `/${role}/manage-department`
        ),
      ]
    ),
  ];

  const facultySidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    getItem(
      <Link href={`/${role}/courses`}>Courses</Link>,
      `/${role}/courses`,
      <TableOutlined />
    ),
  ];
  const studentSidebarItems: MenuItem[] = [
    ...defaultSidebarItems,
    getItem(
      <Link href={`/${role}/courses`}>Courses</Link>,
      `/${role}/courses`,
      <TableOutlined />
    ),
    getItem(
      <Link href={`/${role}/course-schedule`}>Course Schedules</Link>,
      `/${role}/course-schedule`,
      <ScheduleOutlined />
    ),
    getItem(
      <Link href={`/${role}/registration`}>Registration</Link>,
      `/${role}/registration`,
      <ThunderboltOutlined />
    ),
    getItem(
      <Link href={`/${role}/payment`}>Payment</Link>,
      `/${role}/payment`,
      <CreditCardOutlined />
    ),
    getItem(
      <Link href={`/${role}/academic-report`}>Academic Report</Link>,
      `/${role}/academic-report`,
      <FileTextOutlined />
    ),
  ];
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
};

export default SideBarItems;
