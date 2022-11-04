import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@vortex-ui/react";

export default {
  title: "Box",
  component: Box,
  args: {
    children: (
      <>
        <Text> Testing box element </Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

export const Secondary: StoryObj<BoxProps> = {};