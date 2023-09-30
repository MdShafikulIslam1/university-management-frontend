"use client";
import { UserOutlined } from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import { Row, Col, Button, message } from "antd";
import Image from "next/image";
import loginImage from "../../assests/images/login-image.png";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema/loginSchema";

interface IFormValues {
  id: string;
  password: string;
}
const LoginPage = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        message.success("User logged in successfully");
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      justify={"center"}
      align={"middle"}
    >
      <Col sm={12} md={16} lg={8}>
        <Image src={loginImage} alt="login image" width={500} priority />
      </Col>
      <Col sm={12} md={8} lg={6}>
        <h1
          style={{
            margin: "1rem 0rem",
          }}
        >
          Login Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="id"
                type="text"
                label="User Id"
                size="large"
                placeHolder="Enter Uses Id"
                prefix=<UserOutlined />
                allowClear={true}
              />
            </div>

            <div
              style={{
                margin: "1rem 0rem",
              }}
            >
              <FormInput
                name="password"
                type="password"
                label="User Password"
                placeHolder="Enter Correct Password"
                size="large"
              />
            </div>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
