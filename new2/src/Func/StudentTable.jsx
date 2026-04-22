import React from "react";

const StudentTable = ({ students, getStatus, onMarkChange }) => {
  return (
    <div className="table-section">
      <h2>📋 Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const studentStatus = getStatus(student.marks);
            const statusColor =
              studentStatus === "Pass" ? "#4CAF50" : "#f44336";

            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>
                  <input
                    type="number"
                    value={student.marks}
                    onChange={(e) => onMarkChange(index, e.target.value)}
                    min="0"
                    max="100"
                    className="marks-input"
                  />
                </td>
                <td>
                  <span
                    style={{
                      color: statusColor,
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {studentStatus === "Pass" ? "  Pass" : "  Fail"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {students.length === 0 && (
        <p style={{ textAlign: "center", color: "#999", margin: "20px 0" }}>
          No students added yet. Add one to get started!
        </p>
      )}
    </div>
  );
};

export default StudentTable;
