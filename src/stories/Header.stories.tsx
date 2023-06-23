import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../components/Header";

export default {
  title: "Tracker/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const moneyTrackerPageHeader = Template.bind({});
moneyTrackerPageHeader.args = {
  title: "Money Tracker",
};

export const expensePageHeader = Template.bind({});
expensePageHeader.args = {
  title: "Expenses",
  showBackButton: true,
};
