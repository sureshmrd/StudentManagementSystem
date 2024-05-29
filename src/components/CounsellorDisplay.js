import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Display component to show student data
export const CounsellorDisplay = () => {
  const [studentData, setStudentData] = useState([]);
  const [counsellor, setCounsellor] = useState([]);
  const { counId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/myapi/counsellor/`, {
          params: { counId },
        });
        console.log(response)
        setStudentData(response.data.students);
        setCounsellor(response.data.name)
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchData();
  }, [counId]);

  if (studentData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{counsellor}</h1>
      <h2>Student List</h2>
      <ul>
        {studentData.map((student, index) => (
          <div key={index}>
            <h3>{student.regNo}</h3>
            <ul>
              {student.results.map((result, resultIndex) => (
                <li key={resultIndex}>
                  {result.subCode} - {result.subName} - {result.internals} - {result.grade} - {result.credits} - {result.sem} - {result.month_year}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};
