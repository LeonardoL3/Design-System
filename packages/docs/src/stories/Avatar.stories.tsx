import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ascendent_leonardo/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/LeonardoL3.png",
    alt: "Leonardo Lazzaretti",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
