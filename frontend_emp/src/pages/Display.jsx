import "./Display.css";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { message } from "antd";
import { useState, useEffect } from "react";

const Display = () => {
  const [empData, setEmpData] = useState([]);

  //  get all users
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:7000/emp/api/getAllEmployee"
      );
      setEmpData(response.data);
      message.success("Data Saved!!!");
    } catch (error) {
      console.error(error);
      message.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData(), [];
  });

  // delete single user data
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://127.0.0.1:7000/emp/api/deleteEmployee/${id}`)
      .then((res) => {
        console.log(res);
        message.info("User data deleted successfully");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        message.error("Error fetching data");
      });
  };

  const resData = empData.map((values) => {
    return (
      <tr key={values._id}>
        <td>{values.empId}</td>
        <td>{values.empName}</td>
        <td>{values.empContact}</td>
        <td>{values.empDept}</td>
        <td>{values.empSalary}</td>
        <td>
          <Button
            className="mx-3"
            variant="primary"
            onClick={() => handleEdit(values.id)}
          >
            Edit
          </Button>
          <Button
            className="mx-1"
            variant="danger"
            onClick={() => handleDelete(values.empId)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="w-50 mx-auto mt-3">
        <h2>Record of All the existing employees</h2>
        <table>
          <thead>
            <tr>
              <th>Emp Id</th>
              <th>Emp Name</th>
              <th>Contact No</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{resData}</tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
