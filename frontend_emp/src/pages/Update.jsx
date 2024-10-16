import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Update = () => {
  const { empId } = useParams();

  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let nm = e.target.name;
    let val = e.target.value;
    setInput((values) => ({ ...values, [nm]: val }));
    // console.log(input);
  };

  const fetchUserData = async () => {
    const api = `http://127.0.0.1:7000/emp/api/getEmployee/${empId}`;
    try {
      const response = await axios.get(api);
      const [empData] = response.data;
      //   console.log("Employee data", empData);
      setInput(empData); // Update input state with the fetched data
    } catch (error) {
      console.error(error);
      message.error("Error fetching data", error.status);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const api = `http://127.0.0.1:7000/emp/api/updateEmployee/${empId}`;
      //   console.log(empId);
      // Sending the PUT request to update employee data
      axios
        .put(api, input)
        .then((res) => {
          message.success("Data successfully updated!");

          // Reset the input fields after successful update
          setInput({
            empId: "",
            empName: "",
            empEmail: "",
            empContact: "",
            empDept: "",
            empSalary: "",
          });
        })
        .catch((error) => {
          // Handle any error that occurs during the request
          console.error(error);
          message.error("Error updating data. Please try again.");
        });
    } catch (e) {
      console.error(e);
      message.error("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="w-50 mx-auto mt-3">
        <h3>Edit Employee Records : {empId}</h3>
        <form className="formDesign">
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter new ID</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="empId"
                value={input.empId || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Name</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="empName"
                value={input.empName || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Email</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="email"
                name="empEmail"
                value={input.empEmail || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Contact</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="empContact"
                value={input.empContact || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Designation</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="empDept"
                value={input.empDept || ""} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter Salary</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="empSalary"
                value={input.empSalary} // Set input value with fetched data
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
          &nbsp;
          <Button variant="secondary">Cancel</Button>
        </form>
      </div>
    </>
  );
};

export default Update;
