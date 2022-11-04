import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@vortex-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Submit",
  },
  argTypes: {
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Edit profile",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: "xl",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <span> Button with icon</span>
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
