import * as yup from "yup";
export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required("Password is required"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("firstName is required"),
      middleName: yup.string().required("MiddleName is required"),
      lastName: yup.string().required("MiddleName is required"),
    }),
    // email: yup.string().required("Email is Required"),
    // dateOfBirth: yup.string().required("Date of birth is required"),
    // designation: yup.string().required("Designation is required"),
    // contactNo: yup.string().required("Contact is required"),
    // emergencyContactNo: yup
    //   .string()
    //   .required("Emergence contact No. is required"),
  }),
  // presentAddress: yup.string().required("Present Address is required"),
  // permanentAddress: yup.string().required("permanentAddress is required"),
  // bloodGroup: yup.string().required("BloodGroup is required"),
  // managementDepartment: yup
  //   .string()
  //   .required("managementDepartment is required"),
  // designation: yup.string().required("Designation is required"),
  // profileImage: yup.string().notRequired(),
});
