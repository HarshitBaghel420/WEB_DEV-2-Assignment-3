import React, { useState } from "react";
import students from "../Data";
import Statistics from "./Statistics";
import StudentTable from "./StudentTable";
import AddStudentForm from "./AddStudentForm";

const Reportcard = () => {
  const [studentData, setStudentData] = useState(students);
  const [formData, setFormData] = useState({ name: "", marks: "" });

  const getStatus = (marks) => {
    return marks >= 40 ? "Pass" : "Fail";
  };

  const handleAddStudent = (event) => {
    event.preventDefault();

    if (formData.name.trim() && formData.marks.trim()) {
      const newStudent = {
        name: formData.name.trim(),
        marks: parseInt(formData.marks),
      };

      setStudentData((prevData) => [...prevData, newStudent]);
      setFormData({ name: "", marks: "" });
    }
  };

  const handleMarkChange = (index, newMarks) => {
    const updatedData = [...studentData];
    updatedData[index].marks = parseInt(newMarks) || 0;
    setStudentData(updatedData);
  };

  const calculateStats = () => {
    if (studentData.length === 0) {
      return { average: 0, total: 0, passed: 0, failed: 0 };
    }

    const totalMarks = studentData.reduce(
      (sum, student) => sum + student.marks,
      0,
    );
    const average = totalMarks / studentData.length;
    const passed = studentData.filter(
      (student) => getStatus(student.marks) === "Pass",
    ).length;
    const failed = studentData.length - passed;

    return {
      average: average.toFixed(2),
      total: studentData.length,
      passed,
      failed,
    };
  };

  const stats = calculateStats();

  return (
    <div className="container">
      <h1>Report Card</h1>

      <AddStudentForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleAddStudent}
      />

      <Statistics stats={stats} />

      <StudentTable
        students={studentData}
        getStatus={getStatus}
        onMarkChange={handleMarkChange}
      />
    </div>
  );
};

export default Reportcard;
