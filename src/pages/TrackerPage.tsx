import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { SummaryTable, TableRow } from "../components/SummaryTable";
import { useNavigate } from "react-router-dom";
import "../stylesheets/trackerPage.css";
import { io } from "socket.io-client";
const backendURL = "http://localhost:9000";

export const TrackerPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/expenses");
  };

  const [tableItems, setTableItems] = useState<TableRow[]>([]);

  const [loading, setLoading] = useState(true);

  const getExpenseSummary = () => {
    setLoading(true);
    fetch(`${backendURL}/expenses/summary`)
      .then((response) => response.json())
      .then((data) => setTableItems(data))
      .then(() => setLoading(false))
      .catch((error) => {
        alert("Unable to get data from server!!! Please try again later");
        setLoading(false);
      });
  };

  useEffect(() => {
    getExpenseSummary();
    const socket = io(backendURL);
    socket.on("tableUpdated", () => {
      getExpenseSummary();
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="tracker-page-container">
      {loading === true && (
        <div className="loader">
          <div className="container">
            <img alt="back button" src={"/icons/arrow-repeat.svg"} />
            <span>Loading...</span>
          </div>
        </div>
      )}
      <Header title="Expense Tracker" showBackButton={false}></Header>
      <SummaryTable tableData={tableItems}></SummaryTable>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button title="Add Expenses" addHandler={navigateToExpense}></Button>
      </div>
    </div>
  );
};
