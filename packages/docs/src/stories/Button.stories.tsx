import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "@vortex-ui/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Submit",
  },
} as Meta;

export const Primary: StoryObj = {};

export const Secondary: StoryObj = {};
