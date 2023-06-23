import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SummaryTable } from "../components/SummaryTable";

export default {
  title: "Tracker/Summary Table",
  component: SummaryTable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SummaryTable>;

const Template: ComponentStory<typeof SummaryTable> = (args) => (
  <SummaryTable {...args} />
);

export const SummaryTableComponent = Template.bind({});
SummaryTableComponent.args = {
  tableData: [
    { _id: "Health", amount: 50 },
    { _id: "Utils", amount: 2323 },
    { _id: "Others", amount: 23.23 },
  ],
};
