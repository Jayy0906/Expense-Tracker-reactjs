import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [filter, setFilter] = useState("All");

  const addExpense = () => {
    if (!description || !amount) return;
    setExpenses([
      ...expenses,
      { description, amount: parseFloat(amount), category },
    ]);
    setDescription("");
    setAmount("");
    setCategory("Food");
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((exp) => exp.category === filter);
  const totalExpense = filteredExpenses.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div
      className="container py-5 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#E6E6FA", minHeight: "100vh" }}
    >
      <Card
        className="shadow-lg border-0"
        style={{
          backgroundColor: "#F8F0FF",
          width: "50rem",
          borderRadius: "15px",
        }}
      >
        <CardBody className="p-4">
          <CardTitle className="text-center fw-bold fs-3 text-dark mb-4">
            💰 Expense Tracker
          </CardTitle>
          <Form className="mb-4">
            <FormGroup>
              <Label className="fw-semibold">Description</Label>
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter expense"
                className="form-control-lg"
              />
            </FormGroup>
            <FormGroup>
              <Label className="fw-semibold">Amount</Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="form-control-lg"
              />
            </FormGroup>
            <FormGroup>
              <Label className="fw-semibold">Category</Label>
              <Input
                type="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control-lg"
              >
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Entertainment</option>
                <option>Other</option>
              </Input>
            </FormGroup>
            <Button
              color="primary"
              onClick={addExpense}
              className="w-100 btn-lg"
            >
              Add Expense
            </Button>
          </Form>
          <FormGroup>
            <Label className="fw-semibold">Filter by Category</Label>
            <Input
              type="select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control-lg"
            >
              <option>All</option>
              <option>Food</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Entertainment</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <Table striped bordered hover className="mt-3 shadow-sm rounded">
            <thead className="table-dark">
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((exp, index) => (
                <tr key={index}>
                  <td>{exp.description}</td>
                  <td>${exp.amount.toFixed(2)}</td>
                  <td>{exp.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className="text-end fw-bold text-dark mt-3">
            Total: ${totalExpense.toFixed(2)}
          </h4>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExpenseTracker;
