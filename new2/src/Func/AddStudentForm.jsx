import React from "react";

const AddStudentForm = ({ formData, setFormData, onSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-section">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Student Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            type="number"
            placeholder="Marks (0-100)"
            name="marks"
            value={formData.marks}
            onChange={handleInputChange}
            min="0"
            max="100"
            required
          />
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
