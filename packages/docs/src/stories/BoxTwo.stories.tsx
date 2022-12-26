import type { StoryObj, Meta } from "@storybook/react";
import { BoxTwo, BoxPropsTwo, Text } from "@ascendent_leonardo/react";

export default {
  title: "Surfaces/BoxTwo",
  component: BoxTwo,
  args: {
    children: (
      <>
        <Text> Testing BoxTwo element </Text>
      </>
    ),
  },
} as Meta<BoxPropsTwo>;

export const Primary: StoryObj<BoxPropsTwo> = {};
