"use client";
import StepperForm from "@/components/Form/StepperForm/StepperForm";
import BasicStudentInfo from "@/components/StudentForm/BasicStudentInfo";
import GuardianStudentInfo from "@/components/StudentForm/GuardianStudentInfo";
import LocalGuardianStudentInfo from "@/components/StudentForm/LocalGuardianStudentInfo";
import StudentInfo from "@/components/StudentForm/StudentInfo";
import React from "react";

const CreateStudent = () => {
  const handleStudentFormSubmit = (data: any) => {
    console.log(data);
  };
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <BasicStudentInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianStudentInfo />,
    },
    {
      title: "Local Guardian Info",
      content: <LocalGuardianStudentInfo />,
    },
  ];
  return (
    <div>
      <h1>Create student page</h1>
      <StepperForm
        navigateLink="/profile"
        steps={steps}
        submitHandler={handleStudentFormSubmit}
      />
    </div>
  );
};

export default CreateStudent;
