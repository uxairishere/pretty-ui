import React from "react";
import { Button } from "./Button";
import { StoryFn,Meta } from "@storybook/react";

export default {
    title: "Components/Buttons/Button",
    component: Button,
    argTypes: {
      backgroundColor: { control: "color" },
    },
  } as Meta<typeof Button>;
  
  const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    label: "Hello Uxair"
  };