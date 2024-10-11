import "./Display.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Display = () => {
  const [empData, setEmpData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:7000/emp/api/getAllEmployee"
      );
      setEmpData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(), [];
  });

  const resData = empData.map((values) => {
    return (
      <tr key={values._id}>
        <td>{values.empId}</td>
        <td>{values.empName}</td>
        <td>{values.empContact}</td>
        <td>{values.empDept}</td>
        <td>{values.empSalary}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="w-50 mx-auto mt-3">
        <h2>Record of All the existing employees</h2>
        <table>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Contact No</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
          {resData}
        </table>
      </div>
    </>
  );
};

export default Display;
