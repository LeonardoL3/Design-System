import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@ascendent_leonardo/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "md",
    children: "Custom Title",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "text as html h1 heading",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "By default heading is a `h1`, but it's possible to change that with the `as` prop.",
      },
    },
  },
};
