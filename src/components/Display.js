import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MUIDataTable from "mui-datatables";

// Display component to show student data
export const Display = () => {
  const [studentData, setStudentData] = useState(null);
  const { regNo } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/myapi/students/`, {
          params: { regNo },
        });
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchData();
  }, [regNo]);

  if (studentData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Student Data</h1>
      <div>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Sub Code</th>
            <th>Sub Name</th>
            <th>Internals</th>
            <th>Grade</th>
            <th>Credits</th>
            <th>Sem</th>
            <th>Month/Year</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((result, index) => (
            <tr key={index}>
              <td>{result.regNo}</td>
              <td>{result.subCode}</td>
              <td>{result.subName}</td>
              <td>{result.internals}</td>
              <td>{result.grade}</td>
              <td>{result.credits}</td>
              <td>{result.sem}</td>
              <td>{result.month_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
};
