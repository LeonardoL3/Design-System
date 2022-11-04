import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@vortex-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children: "This is a text component",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "text as strong element",
    as: "strong",
  },
};
