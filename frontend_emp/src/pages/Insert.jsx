import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import axios from "axios";
import { useState } from "react";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let nm = e.target.name;
    let val = e.target.value;
    setInput((values) => ({ ...values, [nm]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://127.0.0.1:7000/emp/api/addEmployee";
    axios.post(api, input).then((res) => {
      console.log(res);
      alert("Data inserted successfully");
    });
  };
  return (
    <>
      <div className="w-50 mx-auto mt-3">
        <h2>Insert Data of the new Employee</h2>
        {/* <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Form> */}
        <form className="formDesign" onSubmit={handleSubmit}>
          <Row className="my-3">
            <Col sm={4}>
              <label className="form-label">Enter new ID</label>
            </Col>
            <Col sm={8}>
              <input
                className="form-control"
                type="text"
                name="id"
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
                name="name"
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
                name="email"
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
                name="mob"
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
                name="dept"
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
                name="sal"
                onChange={handleInput}
              />
            </Col>
          </Row>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>{" "}
          | &nbsp;
          <Button variant="secondary">Cancel</Button>
        </form>
      </div>
    </>
  );
};

export default Insert;
