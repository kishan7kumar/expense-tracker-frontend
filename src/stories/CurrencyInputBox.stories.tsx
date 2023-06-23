import { ComponentStory, ComponentMeta } from "@storybook/react";
import CurrencyInput from "react-currency-input-field";

export default {
  title: "Tracker/Input Box",
  component: CurrencyInput,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CurrencyInput>;

const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput {...args} />
);

export const AmountInputBox = Template.bind({});
AmountInputBox.args = {
  placeholder: "$00.00",
  prefix: "$",
  decimalsLimit: 2,
  onValueChange: () => {},
  allowNegativeValue: false,
};
