"use client";
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import FormTextArea from "@/components/Form/FormTextArea";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  genderOptions,
  managementDepartmentOptions,
} from "@/constant/global";
import { adminSchema } from "@/schema/adminSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import { SubmitHandler } from "react-hook-form";

const CreateAdmin = () => {
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log("hit create admin");
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <Form submitHandler={onSubmit}>
        {/* admin information */}
        <div
          style={{
            border: "2px solid #d9d9d9",
            borderRadius: "5px",
            margin: "10px",
            padding: "15px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            Admin Information:
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  label="First Name"
                  size="large"
                  placeHolder="Enter your Name"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  label="Middle Name"
                  size="large"
                  placeHolder="Enter your Name"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  label="Last Name"
                  size="large"
                  placeHolder="Enter your Name"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="password"
                  name="admin.password"
                  label="Password"
                  size="large"
                  placeHolder="Enter Password"
                />
              </div>
            </Col>
            {/* <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormSelectField
                  name="admin.gender"
                  label="Gender"
                  size="large"
                  placeHolder="Enter Your Gender"
                  options={genderOptions}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormSelectField
                  name="admin.managementDepartment"
                  label="Management Department"
                  size="large"
                  placeHolder="select department"
                  options={managementDepartmentOptions}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <UploadImage />
              </div>
            </Col> */}
          </Row>
        </div>
        {/* basic information */}
        {/* <div
          style={{
            border: "2px solid #d9d9d9",
            borderRadius: "5px",
            margin: "10px",
            padding: "15px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            Basic Information:
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="email"
                  name="admin.email"
                  label="Email"
                  size="large"
                  placeHolder="Enter your Email"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  label="Contact Number"
                  size="large"
                  placeHolder="Enter Contact Number"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div>
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  label="Emergency Contact Number"
                  size="large"
                  placeHolder=" Emergency Contact Number"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormDatePicker name="dateOfBirth" label="Date of Birth" />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormSelectField
                  name="admin.bloodGroup"
                  label="Blood Group"
                  size="large"
                  placeHolder="Enter Blood Group"
                  options={bloodGroupOptions}
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormInput
                  name="admin.designation"
                  label="Designation"
                  size="large"
                  placeHolder="Enter Designation"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present Address"
                  placeHolder="Enter Present Address"
                />
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent Address"
                  placeHolder="Enter Permanent Address"
                />
              </div>
            </Col>
          </Row>
        </div> */}
        <Button htmlType="submit" type="primary">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdmin;
