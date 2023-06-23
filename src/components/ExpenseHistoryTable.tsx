import React from "react";
import "../stylesheets/table.css";
import Moment from "react-moment";

export interface TableRow {
  createdAt: string;
  category: string;
  amount: number;
}

interface TableProps {
  tableData: Array<TableRow>;
}

export const ExpenseHistoryTable: React.FC<TableProps> = (
  props: TableProps
) => {
  return (
    <div className="table">
      <div className="table-title">Expense History:</div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Date</th>
            <th style={{ textAlign: "left" }}>Category</th>
            <th style={{ textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "left" }}>
                <Moment format="MM/DD/YY">{item.createdAt}</Moment>
              </td>
              <td style={{ textAlign: "left" }}>{item.category}</td>
              <td style={{ textAlign: "right" }}>
                ${" "}
                {item.amount.toLocaleString("en", {
                  useGrouping: false,
                  minimumFractionDigits: 2,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
