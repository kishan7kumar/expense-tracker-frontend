import React, { useEffect, useRef, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { Header } from "../components/Header";
import {
  ExpenseHistoryTable,
  TableRow,
} from "../components/ExpenseHistoryTable";
import { Button } from "../components/Button";
import { SelectBox } from "../components/SelectBox";
import { useNavigate } from "react-router-dom";
import "../stylesheets/expensePage.css";
import { io } from "socket.io-client";
const backendURL = "http://localhost:9000";

export const ExpensePage: React.FC = () => {
  const navigate = useNavigate();
  const catergoryOptionsList = [
    "Health",
    "Bills",
    "Grocery",
    "Travel",
    "Others",
  ];
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [tableItems, setTableItems] = useState<TableRow[]>([]);
  const [amount, setAmount] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisabledButton] = useState(true);

  useEffect(() => {
    const socket = io(backendURL);
    socket.on("tableUpdated", () => {
      getExpenseHistory();
    });
    getExpenseHistory();
    return () => {
      socket.disconnect();
    };
  }, []);

  const getExpenseHistory = () => {
    setLoading(true);
    fetch(`${backendURL}/expenses/history`)
      .then((response) => response.json())
      .then((data) => setTableItems(data))
      .then(() => setLoading(false))
      .catch((error) => {
        alert("Unable to get data from server!!! Please try again later");
        setLoading(false);
      });
  };

  const addExpense = (data: Object) => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`${backendURL}/expenses`, requestOptions)
      .then((response) => response.json())
      .then(() => {
        setLoading(false);
        setAmount("");
        if (categoryRef.current) categoryRef.current.value = "default";
      })
      .catch((error) => {
        alert("Unable to add expense to server!!");
        setLoading(false);
      });
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      amount &&
      parseInt(amount) !== 0 &&
      categoryRef.current &&
      categoryRef.current.value !== "default"
    ) {
      const data = {
        amount: amount,
        category: categoryRef.current.value,
      };
      addExpense(data);
    }
  };

  const checkButtonDisable = () => {
    if (
      amount === undefined ||
      (amount && parseInt(amount) === 0) ||
      (categoryRef.current && categoryRef.current.value === "default")
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  const goBack = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    checkButtonDisable();
  }, [amount]);

  return (
    <div className="expense-page-container">
      {loading === true && (
        <div className="loader">
          <div className="container">
            <img alt="back button" src={"/icons/arrow-repeat.svg"} />
            <span>Loading...</span>
          </div>
        </div>
      )}
      <Header
        title="Expenses"
        showBackButton={true}
        addHandler={goBack}
      ></Header>
      <div className="expense-page-title">
        <span>Add a new expense:</span>
      </div>
      <div className="input-container">
        <span className="label">Amount</span>
        <div className="field">
          <CurrencyInput
            id="amount-input"
            name="amount-input-name"
            placeholder="$00.00"
            prefix="$"
            decimalsLimit={2}
            value={amount}
            onValueChange={(value) => {
              setAmount(value);
              checkButtonDisable();
            }}
            allowNegativeValue={false}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="label">Category</span>
        <div className="field">
          <SelectBox
            onChange={checkButtonDisable}
            options={catergoryOptionsList}
            reference={categoryRef}
          />
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0px" }}>
        <Button
          isButtonDisable={disableButton}
          title="Confirm"
          addHandler={addItem}
        ></Button>
      </div>
      <div className="table-overflow-container">
        <ExpenseHistoryTable tableData={tableItems}></ExpenseHistoryTable>
      </div>
    </div>
  );
};
