import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectBox } from "../components/SelectBox";

export default {
  title: "Tracker/Select Box",
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = (args) => (
  <SelectBox {...args} />
);

export const defaultSelectBox = Template.bind({});
defaultSelectBox.args = {
  options: ["Health", "Grocery", "Bills", "Travel", "Others"],
};
