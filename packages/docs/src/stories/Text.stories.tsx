import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@vortex-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "This is a text component",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "text as strong element",
    as: "strong",
  },
};
