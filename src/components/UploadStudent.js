import React, { useState } from 'react';
import axios from 'axios';

const UploadStudent = () => {
  const [formData, setFormData] = useState({
    pdf: null
  });

  const handlePdfChange = (e) => {
    setFormData({
      ...formData,
      pdf: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('pdf', formData.pdf, formData.pdf.name);
    form_data.append('name', 'Student');
    form_data.append('pdfName', formData.pdf.name);
    
    let url = 'http://localhost:8000/myapi/upload/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log("then", res.data);
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>
          <input type="file" id="pdf" accept=".xls,.xlsx" onChange={handlePdfChange} required />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default UploadStudent;
