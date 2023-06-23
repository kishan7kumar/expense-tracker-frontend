import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components/Button";

export default {
  title: "Tracker/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const primaryButton = Template.bind({});
primaryButton.args = {
  addHandler: () => {},
  title: "Confirm",
  isButtonDisable: false,
};

export const primaryButtonDisabled = Template.bind({});
primaryButtonDisabled.args = {
  addHandler: () => {},
  title: "Confirm",
  isButtonDisable: true,
};
