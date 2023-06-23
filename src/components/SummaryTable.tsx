import React from "react";
import "../stylesheets/table.css";

export interface TableRow {
  _id: string;
  amount: number;
}

interface TableProps {
  tableData: Array<TableRow>;
}

export const SummaryTable: React.FC<TableProps> = (props: TableProps) => {
  return (
    <div className="table">
      <div className="table-title">Expense Summary:</div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Category</th>
            <th style={{ textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "left" }}>{item._id}</td>
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
