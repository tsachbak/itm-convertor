import React, { useState } from "react";
import axios from "axios";
import "./UploadFileForm.css";

const UploadFileForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5087/api/Uploadfile/uploadfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setData(Object.values(response.data));
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="container">
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          className="file-input"
          type="file"
          onChange={handleFileChange}
          accept=".xlsx,
                  .xls,
                  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                  application/vnd.ms-excel"
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>

      {data && (
        <div className="table-container">
          <h2>Data from File</h2>
          <table>
            <thead>
              <tr>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>ITM East</th>
                <th>ITM North</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.lat}</td>
                  <td>{item.longitude}</td>
                  <td>{item.mitEast}</td>
                  <td>{item.mitNorth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UploadFileForm;
