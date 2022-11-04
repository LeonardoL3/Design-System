import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@vortex-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom Title",
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
          "By default heading is a `h1`, but its possible to change that with the `as` prop.",
      },
    },
  },
};
