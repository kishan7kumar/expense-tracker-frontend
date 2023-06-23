import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExpenseHistoryTable } from "../components/ExpenseHistoryTable";

export default {
  title: "Tracker/Expense History Table",
  component: ExpenseHistoryTable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ExpenseHistoryTable>;

const Template: ComponentStory<typeof ExpenseHistoryTable> = (args) => (
  <ExpenseHistoryTable {...args} />
);

export const ExpenseHistoryTableComponent = Template.bind({});
ExpenseHistoryTableComponent.args = {
  tableData: [
    { createdAt: "02/02/2023", category: "Health", amount: 50 },
    { createdAt: "02/02/2023", category: "Health", amount: 2323 },
    { createdAt: "02/02/2023", category: "Health", amount: 23.23 },
  ],
};
