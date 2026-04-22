import React from "react";

const Statistics = ({ stats }) => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <div className="stat-value">
          Average Marks-
          {stats.average}
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-value">Total Students-{stats.total}</div>
      </div>

      <div className="stat-card">
        <div className="stat-value" style={{ color: "#4CAF50" }}>
          Passed Students-
          {stats.passed}
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-value" style={{ color: "#f44336" }}>
          Failed Students-
          {stats.failed}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
